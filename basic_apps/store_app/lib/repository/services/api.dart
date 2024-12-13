import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:store_app/models/product.dart';
import 'package:store_app/repository/roduct_repo.dart';
import 'package:store_app/utils/constants.dart';
// aliasing اعادة تسمية (والفكره منها اني استعمل get بتاعت http او العمليات المن الباكدج)

// ال abstract class يحتوي علي abstract methods بس (دي كدا مثود ليها name getAll(){}) وال ليها نايم دي مينفعش اعملها override
//implements  فانا لو معايه مكس فنكشنز named و abstract function فكدا هستعمل
class Api implements ProductRepo {
  @override
  Future<List>? getAllProducts() async {
    try {
      // إرسال الطلب
      http.Response response = await http.get(Uri.parse(url));
      if (response.statusCode == success) {
        List<dynamic> body = jsonDecode(response.body); // String => object
        return body;
      } else {
        // في حالة وجود خطأ في حالة الاستجابة
        throw Exception('Failed to fetch products: ${response.statusCode}');
      }
    } catch (e) {
      printHere(e.toString());
      // رمي الاستثناء ليتم التعامل معه عند الاستدعاء
      throw Exception('Failed to fetch products: $e');
    }
  }

  @override
  Future<void> addProduct(Product product) async {
    try {
      http.Response response = await http.post(
        Uri.parse(url),
        headers: {"Content-Type": "application/json"},
        body: jsonEncode(product.toJson()),
        // object to string وعملت ال tojson علشان اتعامل بيها هنا
      );

      if (response.statusCode == success) {
        printHere('Product added successfully');
      } else {
        throw Exception('Failed to add product: ${response.statusCode}');
      }
    } catch (e) {
      printHere('Error adding product: $e');
      throw Exception('Error adding product: $e');
    }
  }

  @override
  Future<void> updateProduct(String id, Product product) async {
    try {
      Uri uri = Uri.parse('$url/$id');
      http.Response response = await http.patch(
        uri,
        headers: {"Content-Type": "application/json"},
        body: jsonEncode(product.toJson()),
      );

      if (response.statusCode == success) {
        printHere('Product updated successfully');
      } else {
        throw Exception('Failed to update product: ${response.statusCode}');
      }
    } catch (e) {
      printHere('Error updating product: $e');
      throw Exception('Error updating product: $e');
    }
  }

  @override
  Future<void> deleteProduct(String id) async {
    http.Response response =
        await http.delete(Uri.parse('$url/$id')); // الشكل القديم url + '/' + id
    printHere(response.body);
  }
}
