import 'package:flutter/foundation.dart';
import 'package:store_app/models/product.dart';
import 'package:store_app/repository/roduct_repo.dart';
import 'package:store_app/utils/constants.dart';

class ProductViewModel with ChangeNotifier {
  ProductViewModel({required this.productRepo});

  // compusition بعرف فالكلاس بتعتي data type من نوع كلاس تاني
  // في هنا حتة ال polymorphism باخد من البيرثو منها الهو عندي ال api وهنا انا البتحكم هتحكم فال api او الloacal db
  // ودي حتة ال strategy pattern (reusability)
  late ProductRepo productRepo;
  //= Api();

  final List<Product> _products = [];
  // مبدا ال encapsulation عملته private فلازم اعمله getter

  //list getter ودي فنكشن منغير باراميترز الهي getter
  get products {
    return _products;
  }

  Future<void> getAllProducts() async {
    List? list = await productRepo.getAllProducts();
    //المتغير دا هيخزن اللسته الجايه من ال api
    // فاحنا عاوزين نضيف الاوبجكتات الجايه من الlist دي لليست الفوق

    _products
        .addAll(list!.map((toElement) => Product.fromjson(toElement)).toList());
    // list , map and list بيرثو من كلاس iterable وهي بتعمل forloop بتلف علي الليست كلها
    // .map هتلف علي الليست كلها وتعملي حدث معين
    // هيبقي جاي بشكل جسون فانا بحولو لايتم من نوع برودكت وبحولها فالاخر لليست علشان هي من نوع iterable

    notifyListeners();
    printHere(_products[0].title);
  }
}
