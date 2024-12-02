import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;
import 'package:store_app/repository/roduct_repo.dart';
import 'package:store_app/utils/constants.dart';
// aliasing اعادة تسمية (والفكره منها اني استعمل get بتاعت http او العمليات المن الباكدج)

// ال abstract class يحتوي علي abstract methods بس (دي كدا مثود ليها name getAll(){}) وال ليها نايم دي مينفعش اعملها override
//implements  فانا لو معايه مكس فنكشنز named و abstract function فكدا هستعمل
class Api implements ProductRepo {
  @override
  Future<void> addProduct() {}

  @override
  Future<void> deletProduct() {}

  @override
  Future<List<dynamic>> getAllProducts() async {
    try {
      // إرسال الطلب
      http.Response response = await http.get(Uri.parse(url));
      if (response.statusCode == success) {
        List<dynamic> body = jsonDecode(response.body);
        return body;
      } else {
        // في حالة وجود خطأ في حالة الاستجابة
        throw Exception('Failed to fetch products: ${response.statusCode}');
      }
    } catch (e) {
      if (kDebugMode) {
        print(e.toString());
      }
      // رمي الاستثناء ليتم التعامل معه عند الاستدعاء
      throw Exception('Failed to fetch products: $e');
    }
  }

  @override
  Future<void> updateProduct() {}
}
