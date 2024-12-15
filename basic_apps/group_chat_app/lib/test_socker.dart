import 'package:group_chat_app/utiles.dart';
import 'package:socket_io_client/socket_io_client.dart' as socket_io;

void main() async {
  socket_io.Socket socket = socket_io.io(uriMethods('http'), socketIoOptions());

  socket.connect();

  // التعامل مع الاتصال بنجاح
  socket.onConnect(
      (_) => printHere('socket connected with the server')); // رسالة ليا هنا

  // استقبال الرسائل من السيرفر
  socket.on('res', (data) => printHere(data));

  // إرسال بيانات إلى السيرفر
  socket.emit('msg', {
    'name': 'ahmed',
    'age': 21,
  }); // بعمل emit هناك وهنا بستقبله ف data بس انا خليتها متاخدش باراميتر _

// لما السيرفر يفصل
  socket.onDisconnect((_) => printHere('disconnect'));
}
