import 'package:fwc_album_app/app/models/user_model.dart';

abstract class HomeView {
  void setUser(UserModel user);
  void error(String message);
  void logoutSuccess();
  void showLoader();
}
