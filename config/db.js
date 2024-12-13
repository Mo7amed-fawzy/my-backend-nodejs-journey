const mongoose = require('mongoose');

const urichat = 'mongodb://localhost:27017/MyData/GroupChat';
const urichatpc = 'http://localhost:8080/';
const envvar = process.env.DB_KEY

// علشان اربط بقاعدة البيانات محتاج اعمل فنكشن الكونكت
const connectDB = async () => {
    try {
        const uri = envvar || urichatpc;
        await mongoose.connect(uri);
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1); // بوقف السيرفر لو فشل الكونكت 
    }
};

// بستدعي الفنشكن بتاعت الكونكت وبعمل فنكشن تشغيل السيرفر بعد نجاح عملية الكونكت
const startServer = async (appserver) => {
    try {
        await connectDB();  // انتظار اتصال MongoDB قبل تشغيل السيرفر
        // process.env.port دي بتحتوي علي ال environment variables فانا عاوز منها ال port بحيث يكون داينامك وحطيت ديفولت 8080 فحالة كان ب null
        const port = process.env.PORT || 8080;

        appserver.listen(port, () => { // بتتحول ل http server 
            console.log(`Server is running on port ${port} using express`);
        });
    } catch (error) {
        console.error('Error starting the server:', error);
    }
};
// دا منغير مونجو http://localhost:${PORT}
//دا ديفولت مونجو mongodb://localhost:27017/${NameOfCollection}
module.exports = startServer;