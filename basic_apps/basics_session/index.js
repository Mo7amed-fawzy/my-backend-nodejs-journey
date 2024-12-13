console.log('welcom from Node JS');
// function firstFunction(expoerts, require, module ,__filename, __dirname ){} //  فالكود اي فايل بكريته دي الباراميترز الاساسيه البتبقي بس هي مش ظاهره

function myName() { console.log('ahmed'); }
function myAddress() { console.log('I Live in Egypt'); }

// module.exports = myName; // تصدير عام للفنكشن
// الشكل دا بقي بدي اي اسم فنكشن علشان استدعيها من الاوبجكت هناك
module.exports.printMyName = myName;
module.exports.printMyAddress = myAddress;


// const myFunction = () => { } // دي ال arrow function وهي زي ال anonemus function
exports.printMyAge = () => {
    console.log('My Age is 21');
}