const express = require('express');

const router = express.Router();
const productModelOBJ = require('../models/product')



//  بتاع الباك بيعمل group of links enables u to interact with db 
// هناك بيبقي شكله كدا app.use('/product', objrouter, (req, response, next) => {
// وبيكريت فولدر جواه دا علشان كدا مش بدي اسم 
router.get('/', async (req, response) => { // دي اسمها promis شبه ال future ممكن اتعامل ب .then or asyn/await
    // response.send('<h1>hello from home</h1>'); // دا ويب
    // response.status(200).json({
    //     "name": "ahmed el sabahy",
    //     "age": 21,
    //     "country": "cairo",
    // }); // دا شبه الماب
    // productModelOBJ.find().then((data) => { response.json(data) })// الطريقه دي زي future فمش احسن حاجه
    try {
        const product = await productModelOBJ.find();
        response.json(product);
    } catch (err) {
        console.log(err);
    }
});

// get element by id
router.get('/:productId', async (req, response) => { // اسمهم البارامز :
    try {
        const product = await productModelOBJ.findById(req.params.productId);
        response.json(product);
    } catch (err) {
        console.log(err);
    }
});
// router.get('/user', (req, response) => {
//     // response.send('<h1>hello from home</h1>'); // دا ويب
//     response.status(200).json({
//         "name": "mohamed",
//         "age": 21,
//         "country": "sohag",
//     }); // دا شبه الماب
// });

router.post('/', (req, res) => { // النت هتبعتو فالبودي هرجعهولك وارجعلك معاه رسالة
    // const name = req.body.name;
    // const price = req.body.price;
    const product = new productModelOBJ({
        title: req.body.title,
        desc: req.body.desc,
        color: req.body.color,
    });
    // res.status(201).json({
    //     "message": "product created successfully",
    //     "data": { "name": name, "price": price }
    // });
    product.save().then((data) => {
        res.json({ "message": "product created successfully", "data": data });
    });
});

module.exports = router;


// sql(relations*) vs nosql
// table = collection
// row = document
// column = field