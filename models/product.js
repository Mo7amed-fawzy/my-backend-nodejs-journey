const mongoose = require('mongoose');

const productModel = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    }
});

// هنا الفنشكن دي بتاخد الباراميتر الاول اسم الكولكشن من الموقع والباراميتر التاني اسم المودل العندي هنا 
module.exports = mongoose.model('products', productModel);