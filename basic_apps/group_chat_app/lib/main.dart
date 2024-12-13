import 'package:flutter/material.dart';
// import 'package:socket_io_client/socket_io_client.dart' as IO;

void main() async {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: Scaffold(
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

  @override
  Widget build(BuildContext context) {
    double width = MediaQuery.of(context).size.width;
    double height = MediaQuery.of(context).size.height;

    return Scaffold(
      body: Column(
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
            ),
          ),
        ],
      ),
    );
  }
}
