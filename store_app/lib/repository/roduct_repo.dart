abstract class ProductRepo {
  // بتحتوي علي abstract functions والهي ال fucntions ملهاش body

  //get بستعمل Future function
  // وهنا الفنكشن دي مش هحطلها body الهي الاقواس دي {}
  // ولما ارث من الكلاس دي فنا لازم اعمل override

  Future<List>? getAllProducts();

  //post
  Future<void> addProduct();

  //patch
  Future<void> updateProduct();

  //delet
  Future<void> deletProduct();
}
