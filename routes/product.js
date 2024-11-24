const express = require('express');

const router = express.Router();



//  بتاع الباك بيعمل group of links enables u to interact with db 
// هناك بيبقي شكله كدا app.use('/product', objrouter, (req, response, next) => {
// وبيكريت فولدر جواه دا علشان كدا مش بدي اسم 
router.get('/', (req, response) => {
    // response.send('<h1>hello from home</h1>'); // دا ويب
    response.status(200).json({
        "name": "ahmed el sabahy",
        "age": 21,
        "country": "cairo",
    }); // دا شبه الماب
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
    const name = req.body.name;
    const price = req.body.price;
    res.status(201).json({
        "message": "product created successfully",
        "data": { "name": name, "price": price }
    });
});

module.exports = router;