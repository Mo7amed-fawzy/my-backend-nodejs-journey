//npm init // لما اجي اعمل باكدج
//npm i express --save دي هتخلي الباكدج تضاف فمرحلة الديفيلوبمت و الديبلويمنت وحتي لو مكتبتش سيف هيعتبرها نفسها
//npm i express --save -dev دي هتخلي الباكدج تضاف فمرحلة الديفيلوبمت و الديبلويمنت
// باكدج اسمها nodemone علشان اخلي السيرفر شغال علطول npx nodemon app.js 

const express = require('express'); //كدا عملت فنكشن او اوبجكت حطيت فيه خصائص الفريموورك
const app = express();

//  بتاع الباك بيعمل group of links enables u to interact with db 

// MiddleWare هو فنكشن بتتفنز مع كل ريكويست ونيكست دي بقولو روح علي المطلوب البعده
// app.use('/product', (req, response, next) => {
//     console.log('middle ware was called');
//     next();
// });


app.get('/product', (req, response) => {
    // response.send('<h1>hello from home</h1>'); // دا ويب
    response.status(200).json({
        "name": "ahmed el sabahy",
        "age": 21,
        "country": "cairo",
    }); // دا شبه الماب
});
app.get('/user', (req, response) => {
    // response.send('<h1>hello from home</h1>'); // دا ويب
    response.status(200).json({
        "name": "mohamed",
        "age": 21,
        "country": "sohag",
    }); // دا شبه الماب
});
app.listen(8080, () => {
    console.log('server is running on port 8080 using express');
})