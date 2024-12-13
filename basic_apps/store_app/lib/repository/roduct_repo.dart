import 'package:store_app/models/product.dart';

abstract class ProductRepo {
  // بتحتوي علي abstract functions والهي ال fucntions ملهاش body

  //get بستعمل Future function
  // وهنا الفنكشن دي مش هحطلها body الهي الاقواس دي {}
  // ولما ارث من الكلاس دي فنا لازم اعمل override

  Future<List<dynamic>>? getAllProducts();

  //post
  Future<void> addProduct(Product product);

  //patch
  Future<void> updateProduct(String id, Product product);

  //delet
  Future<void> deleteProduct(String id);
}
