import 'package:flutter/material.dart';
import 'package:group_chat_app/utiles.dart';
import 'package:socket_io_client/socket_io_client.dart' as socket_io;

void main() async {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        backgroundColor: Colors.blue,
        body: ChateScreen(),
      ),
    );
  }
}

class ChateScreen extends StatefulWidget {
  const ChateScreen({super.key});

  @override
  State<ChateScreen> createState() => _ChateScreenState();
}

class _ChateScreenState extends State<ChateScreen> {
  socket_io.Socket? socket;

  List<String> msgs = [];
  TextEditingController? msg;

  @override
  void initState() {
    super.initState();
    msg = TextEditingController();
  }

  @override
  void dispose() {
    msg!.dispose();
    super
        .dispose(); // استدعاء الفنكشن الأصلية للتأكد من أن الاوبجكت بيدسبوز بشكل صحيح
  }

  initTheSocket() async {
    socket = socket_io.io(uriMethods('http'), socketIoOptions());

    socket!.connect();
    socket!.onConnect((_) => printHere('socket connected with the server'));

    // استقبال الرسائل من السيرفر
    socket!.on('res', (data) => printHere(data));

    // إرسال بيانات إلى السيرفر
  }

  @override
  Widget build(BuildContext context) {
    double width = MediaQuery.of(context).size.width;
    double height = MediaQuery.of(context).size.height;

    return Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.blue.withOpacity(0.7),
          title: const Text('Group chat app with socket.io',
              style: TextStyle(color: Colors.white)),
        ),
        body: Container(
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              colors: [Colors.blue, Colors.purple], // قم بتحديد الألوان هنا
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
            ),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              SizedBox(height: height * 0.04),
              Expanded(
                  child: Align(
                alignment: Alignment.center,
                child: SizedBox(
                  width: width * 0.40,
                  child: ListView.builder(
                    itemCount: msgs.length,
                    itemBuilder: (context, index) {
                      return Padding(
                        padding: const EdgeInsets.only(right: 20),
                        child: Text(
                          msgs[index],
                          style: const TextStyle(fontSize: 20),
                        ),
                      );
                    },
                  ),
                ),
              )),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  SizedBox(
                    width: height * 0.34,
                    height: height * 0.13,
                    child: CustomTextFormField(customController: msg),
                  ),
                  SizedBox(width: width * 0.02),
                  Padding(
                    padding: EdgeInsets.only(bottom: height * 0.06),
                    child: FloatingActionButton(
                      onPressed: () {},
                      backgroundColor: Colors.blue.withOpacity(0.5),
                      child: const Icon(
                        Icons.send,
                        color: Colors.white,
                      ),
                    ),
                  )
                ],
              )
            ],
          ),
        ));
  }
}

class CustomTextFormField extends StatelessWidget {
  const CustomTextFormField({
    super.key,
    required this.customController,
  });

  final TextEditingController? customController;

  @override
  Widget build(BuildContext context) {
    return TextFormField(
        controller: customController,
        style: const TextStyle(color: Colors.black),
        keyboardType: TextInputType.text,
        textDirection: TextDirection.rtl,
        textAlign: TextAlign.right,
        decoration: InputDecoration(
            border: OutlineInputBorder(borderRadius: BorderRadius.circular(10)),
            fillColor: Colors.blue.withOpacity(0.5),
            filled: true,
            hintText: '... اكتب يعم',
            hintStyle: const TextStyle(
                color: Colors.black, fontWeight: FontWeight.normal)));
  }
}
