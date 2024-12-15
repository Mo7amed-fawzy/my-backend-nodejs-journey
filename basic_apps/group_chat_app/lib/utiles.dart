import 'package:flutter/foundation.dart';

printHere(var obj) {
  if (kDebugMode) {
    print(obj);
  }
}

Map<String, dynamic> socketIoOptions() {
  Map<String, dynamic> options = {
    'transports': ['websocket'],
    'autoConnect': false, // فولس يعني الاتصال مش بيبدا تلقائيًا
  };
  return options;
}

String uriMethods(String url) {
  String? url;
  if (url == 'http') {
    url = 'http://localhost:8080';
  } else if (url == 'mongoo') {
    url = 'mongodb://localhost:27017/MyData/GroupChat';
  } else {
    throw Exception('Unknown URI type: $url');
  }
  return url;
}
