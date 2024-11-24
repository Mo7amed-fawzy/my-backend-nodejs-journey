const myFunctions = require('./index'); // دا كدا شبه الاوبجكت من موديول (ملف) ودا ال CommonJS

myFunctions.printMyName();
myFunctions.printMyAddress();
myFunctions.printMyAge();

// import { printMyName, printMyAddress, printMyAge } from './index'; // ES Modules

// printMyName();
// printMyAddress();
// printMyAge();
// الاكواد دي شغاله مع الcommonJS بس
console.log('file name is ' + __filename); // بيطبعلي الباث مع اسم الفايل 
console.log('file name is ' + __dirname); // بيطبعلي الباث منغير اسم الفايل 

const fileSystem = require('fs');

fileSystem.writeFile('myFile.txt', 'my name is ahmed , i livee in egypt , iam a computer science student', () => { console.log('file created succesfully') });
// writeFile دي ميثود فيها 3 باراميترز الاول اسم الملف التاني الكتابة الجواه التالت فنكشن كوللباك وليكن اروو فنكشن بعرف بيها ان العمليه تمت بنجاح
fileSystem.readFile('myFile.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});
