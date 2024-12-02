class Product {
  late String title;
  late String desc;
  late String image;
  Product({
    required this.title,
    required this.desc,
    required this.image,
  });
  //optional constructor and named علشان يقترح الاسماء

  // from json الداتا هتجي من ال api بشكل ال json او map يعني (json javascript object = map in dart)
  // ex product.title either product['title'] (from json is constructor)

// علشان تخلي الكونستركتور يرجع ريتيرن بستعمل factory (يعني برجع اوبجكت بس من كونستركتور تاني)
  factory Product.fromjson(Map<String, dynamic> json) {
    // بنرجع اوبجكت من الكونستركتور
    return Product(
        title: json['title'], desc: json['desc'], image: json['image']);
  }

  //to json is function بديها ابوجكت بتحولو لماب علشان اخزن فال api
  Map<String, dynamic> toJson() {
    return {
      'title': title,
      'desc': desc,
      'image': image,
    };
  }
  // لما بترث من ابستراكت ف انت لازم تعمل override
  //   abstract بتحتوي علي ميثودز محتاجه يتعملها override وممكن تدي للميثودز body فمش محتاج override  abstract method هي الميثود الملهاش body
// interface لازم اعمل override لكل الميثود الفيها حتي لو ليها body
}
