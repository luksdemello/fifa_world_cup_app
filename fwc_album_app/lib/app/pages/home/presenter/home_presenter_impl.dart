// ignore_for_file: public_member_api_docs, sort_constructors_first
import 'package:fwc_album_app/app/pages/home/view/home_view.dart';
import 'package:fwc_album_app/app/repositories/user/user_repository.dart';
import 'package:shared_preferences/shared_preferences.dart';

import './home_presenter.dart';

class HomePresenterImpl implements HomePresenter {
  late final HomeView _view;
  final UserRepository userRepository;

  HomePresenterImpl({
    required this.userRepository,
  });

  @override
  Future<void> getUser() async {
    try {
      _view.showLoader();
      final user = await userRepository.getUser();
      _view.setUser(user);
    } catch (e) {
      _view.error('Erro ao buscar usuário');
    }
  }

  @override
  set view(HomeView view) => _view = view;

  @override
  Future<void> logout() async {
    final sp = await SharedPreferences.getInstance();
    sp.clear();
    _view.logoutSuccess();
  }
}
