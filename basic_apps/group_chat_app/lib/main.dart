import 'package:group_chat_app/utiles.dart';

// ignore: library_prefixes
import 'package:socket_io_client/socket_io_client.dart' as IO;

void main() async {
  Map<String, dynamic> options = {
    'transports': ['websocket'],
    'autoConnect': false, // فولس يعني الاتصال مش بيبدا تلقائيًا
  };

  IO.Socket socket = IO.io('http://192.168.1.3:8080/', options);

  socket.connect();

  socket.onConnect((data) => printHere('connected!'));
  socket.on('event', (data) => printHere(data));
  socket.emit('msg', {'msg': 'helloWorld'});
  socket.onDisconnect((_) => printHere('disconnect'));
}
