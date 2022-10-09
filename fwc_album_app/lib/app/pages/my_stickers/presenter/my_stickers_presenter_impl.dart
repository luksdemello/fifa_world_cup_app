// ignore_for_file: public_member_api_docs, sort_constructors_first
import 'dart:developer';

import 'package:fwc_album_app/app/models/groups_stickers.dart';
import 'package:fwc_album_app/app/pages/my_stickers/view/my_stickers_view.dart';
import 'package:fwc_album_app/app/repositories/stickers/stickers_repository.dart';

import './my_stickers_presenter.dart';

class MyStickersPresenterImpl implements MyStickersPresenter {
  late final MyStickersView _view;
  final StickersRepository stickersRepository;

  var album = <GroupsStickers>[];
  var statusSelected = 'all';
  List<String>? countries;

  MyStickersPresenterImpl({
    required this.stickersRepository,
  });

  @override
  Future<void> getMyAlbum() async {
    try {
      album = await stickersRepository.getMyAlbum();
      _view.loadedPage([...album]);
    } catch (e, s) {
      log('Erro ao buscar album', error: e, stackTrace: s);
      _view.error('Erro ao buscar album');
    }
  }

  @override
  set view(MyStickersView view) => _view = view;

  @override
  Future<void> statusFilter(String status) async {
    statusSelected = status;
    _view.updateStatusFilter(status);
  }

  @override
  void countryFilter(List<String>? countries) {
    this.countries = countries;
    if (countries == null) {
      _view.updateAlbum(album);
    } else {
      final filterAlbum = [
        ...album.where((element) => countries.contains(element.countryCode))
      ];
      _view.updateAlbum(filterAlbum);
    }
  }
}
