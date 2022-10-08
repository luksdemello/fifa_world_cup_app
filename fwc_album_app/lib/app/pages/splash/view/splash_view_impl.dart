import 'package:flutter/material.dart';
import 'package:fwc_album_app/app/core/ui/helpers/loaders.dart';
import 'package:fwc_album_app/app/pages/splash/splash_page.dart';
import 'package:fwc_album_app/app/pages/splash/view/spalsh_view.dart';

abstract class SpalshViewImp extends State<SplashPage>
    with Loader<SplashPage>
    implements SpalshView {
  @override
  void initState() {
    widget.presenter.view = this;
    super.initState();
  }

  @override
  void logged(bool isLogged) {
    hideLoader();
    if (isLogged) {
      Navigator.of(context).pushNamedAndRemoveUntil('/home', (route) => false);
    } else {
      Navigator.of(context)
          .pushNamedAndRemoveUntil('/auth/login', (route) => false);
    }
  }
}
