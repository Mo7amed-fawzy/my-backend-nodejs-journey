//npm init // لما اجي اعمل باكدج
//npm i express --save دي هتخلي الباكدج تضاف فمرحلة الديفيلوبمت و الديبلويمنت وحتي لو مكتبتش سيف هيعتبرها نفسها
//npm i express --save -dev دي هتخلي الباكدج تضاف فمرحلة الديفيلوبمت و الديبلويمنت
// باكدج اسمها nodemone علشان اخلي السيرفر شغال علطول npx nodemon app.js 
//npm i mongoose for install and for apdate npm install mongoose@latest
//npm i cors لحل مشكلة الهوست(الدوماين) المن بلد مختلفه (add headers)


const express = require('express'); //كدا عملت فنكشن او اوبجكت حطيت فيه خصائص الفريموورك
const expressOBJ = express();
const objrouter = require('./routes/product');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');


// allow access middle ware
expressOBJ.use(cors());

const uri = 'mongodb+srv://mohamed:wbalYaBKMm2iqvku@cluster0.i0vlj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// علشان اربط بقاعدة البيانات محتاج اعمل فنكشن الكونكت
const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB successfully');
    } catch (err) {
        console.error('Failed to connect to MongoDB:', err);
        process.exit(1); // بوقف البرنامج لو فشل الكونكت 
    }
};
// بستدعي الفنشكن بتاعت الكونكت وبعمل فنكشن تشغيل السيرفر بعد نجاح عملية الكونكت
const startServer = async () => {
    await connectDB(); // انتظار اتصال MongoDB قبل تشغيل السيرفر
    // process.env.port دي بتحتوي علي ال environment variables فانا عاوز منها ال port بحيث يكون داينامك وحطيت ديفولت 8080 فحالة كان ب null
    expressOBJ.listen(process.env.PORT || 8080, () => {
        console.log('Server is running on port 8080 using express');
    });
};

startServer();

// الطريقه القديمة
// mongoose.connect(uri, () => {
//     console.log('connected mongo successfully');

//     expressOBJ.listen(8080, () => {
//         console.log('server is running on port 8080 using express');
//     })
// });


// MiddleWare هو فنكشن بتتفنز مع كل ريكويست ونيكست دي بقولو روح علي المطلوب البعده


// body parser to JSON(MiddleWare) using bodyparser peckage =>  npm i body-parser --save
expressOBJ.use(bodyparser.json());


//routesMiddleWare
expressOBJ.use('/product', objrouter, (req, response, next) => {
    console.log('middle ware was called');
    next();
});





