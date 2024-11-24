//npm init // لما اجي اعمل باكدج
//npm i express --save دي هتخلي الباكدج تضاف فمرحلة الديفيلوبمت و الديبلويمنت وحتي لو مكتبتش سيف هيعتبرها نفسها
//npm i express --save -dev دي هتخلي الباكدج تضاف فمرحلة الديفيلوبمت و الديبلويمنت
// باكدج اسمها nodemone علشان اخلي السيرفر شغال علطول npx nodemon app.js 

const express = require('express'); //كدا عملت فنكشن او اوبجكت حطيت فيه خصائص الفريموورك
const app = express();
const objrouter = require('./routes/product');
const bodyparser = require('body-parser');

// MiddleWare هو فنكشن بتتفنز مع كل ريكويست ونيكست دي بقولو روح علي المطلوب البعده


// body parser to JSON(MiddleWare) using bodyparser peckage =>  npm i body-parser --save
app.use(bodyparser.json());


//routesMiddleWare
app.use('/product', objrouter, (req, response, next) => {
    console.log('middle ware was called');
    next();
});






app.listen(8080, () => {
    console.log('server is running on port 8080 using express');
})