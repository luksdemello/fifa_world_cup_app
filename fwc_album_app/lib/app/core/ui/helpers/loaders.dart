import 'package:flutter/material.dart';
import 'package:loading_animation_widget/loading_animation_widget.dart';

mixin Loader<T extends StatefulWidget> on State<T> {
  var isLoading = false;

  void showLoader() {
    if (!isLoading) {
      isLoading = true;
      showDialog(
        context: context,
        builder: (_) {
          return LoadingAnimationWidget.threeArchedCircle(
            color: Colors.white,
            size: 60,
          );
        },
      );
    }
  }

  void hideLoader() {
    if (isLoading) {
      isLoading = false;
      Navigator.of(context).pop();
    }
  }
}
