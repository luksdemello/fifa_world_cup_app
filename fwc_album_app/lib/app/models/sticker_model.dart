import 'dart:convert';

class StickerModel {
  final int id;
  final String stickerCode;
  final String stickerNumber;
  final String? stickerImage;
  final String token;
  final String createdAt;
  final String updatedAt;

  StickerModel({
    required this.id,
    required this.stickerCode,
    required this.stickerNumber,
    required this.stickerImage,
    required this.token,
    required this.createdAt,
    required this.updatedAt,
  });

  Map<String, dynamic> toMap() {
    return <String, dynamic>{
      'id': id,
      'sticker_code': stickerCode,
      'sticker_number': stickerNumber,
      'sticker_image': stickerImage,
      'token': token,
      'created_at': createdAt,
      'updated_at': updatedAt,
    };
  }

  factory StickerModel.fromMap(Map<String, dynamic> map) {
    return StickerModel(
      id: map['id'] as int,
      stickerCode: map['sticker_code'] as String,
      stickerNumber: map['sticker_number'] as String,
      stickerImage: map['sticker_image'] as String?,
      token: map['token'] as String,
      createdAt: map['created_at'] as String,
      updatedAt: map['updated_at'] as String,
    );
  }

  String toJson() => json.encode(toMap());

  factory StickerModel.fromJson(String source) =>
      StickerModel.fromMap(json.decode(source) as Map<String, dynamic>);
}
