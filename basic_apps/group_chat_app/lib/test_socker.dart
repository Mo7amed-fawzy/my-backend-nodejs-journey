// import 'package:group_chat_app/utiles.dart';

// // ignore: library_prefixes
// import 'package:socket_io_client/socket_io_client.dart' as IO;

// void main() async {
//   Map<String, dynamic> options = {
//     'transports': ['websocket'],
//     'autoConnect': false, // فولس يعني الاتصال مش بيبدا تلقائيًا
//   };

//   IO.Socket socket = IO.io('http://localhost:8080', options);

//   socket.connect();

//   socket.onConnect(
//       (_) => printHere('socket connected with the server')); // رسالة ليا هنا

//   socket.on('res', (data) => printHere(data));
//   socket.emit('msg', {
//     'name': 'ahmed',
//     'age': 21,
//   }); // بعمل emit هناك وهنا بستقبله ف data بس انا خليتها متاخدش باراميتر _
//   socket.onDisconnect((_) => printHere('disconnect')); // لما السيرفر يفصل
// }
