const http = require('http');

// إنشاء السيرفر
const myServer = http.createServer((req, response) => {
    const url = req.url;// دا اوبجكت بطلع منه اليو ار ال

    if (url === '/') {
        response.write('<h1>am backend</h1>');
        response.end(); // إنهاء الرد
    } else if (url === '/home') {
        response.write('<h1>you are in home page</h1>');
        response.end();
    } else {
        // الرد الافتراضي إذا لم يكن الطلب مطابقًا لأي من الحالات السابقة
        response.write('<h1>404 Not Found</h1>');
        response.end();
    }
});

// استمع للطلبات على المنفذ 8080
myServer.listen(8080, () => {
    console.log('server is running on port 8080');
});
