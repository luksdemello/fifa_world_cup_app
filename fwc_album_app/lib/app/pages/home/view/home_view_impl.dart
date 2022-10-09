import 'package:flutter/material.dart';
import 'package:fwc_album_app/app/core/ui/helpers/loaders.dart';
import 'package:fwc_album_app/app/core/ui/helpers/messages.dart';
import 'package:fwc_album_app/app/models/user_model.dart';
import 'package:fwc_album_app/app/pages/home/home_page.dart';

import './home_view.dart';

abstract class HomeViewImpl extends State<HomePage>
    with Loader<HomePage>, Messages<HomePage>
    implements HomeView {
  UserModel? user;

  @override
  void initState() {
    widget.homePresenter.view = this;
    WidgetsBinding.instance.addPostFrameCallback((timeStamp) {
      widget.homePresenter.getUser();
    });
    super.initState();
  }

  @override
  void error(String message) {
    hideLoader();
    showError(message);
  }

  @override
  void logoutSuccess() {
    Navigator.of(context)
        .pushNamedAndRemoveUntil('/auth/login', (route) => false);
  }

  @override
  void setUser(UserModel user) {
    hideLoader();
    setState(() {
      this.user = user;
    });
  }
}
