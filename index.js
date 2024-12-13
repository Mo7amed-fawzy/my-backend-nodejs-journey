const express = require('express'); // Express framework
const expressOBJ = express(); // Initialize Express
const bodyparser = require('body-parser'); // Parse request bodies
const cors = require('cors'); // Handle cross-origin requests بيسمح بالريك الجاي من domains مختلفه
const dotenv = require('dotenv'); // Load environment variables
const startServer = require('./config/db'); // Import server start function
const http = require('http'); // HTTP server
// const socketIo = require('socket.io'); // Real-time communication الطريقة الفديمه
const productRouter = require('./routes/product'); // Import routes

// Load environment variables
dotenv.config();

// Create HTTP server
const httpserver = http.createServer(expressOBJ); // 1 

// Initialize Socket.IO
const io = require('socket.io')(httpserver); // بستعدي السوكت وبنفذو كفنكشن محتاجه الhttpserver كباراميتر

// Middleware وهو تعامل اكسبريس مع الريك الجاي للخادم قبل متوصل للراوت وبعد ميتنفذ تقدر تبعت الريس
expressOBJ.use(cors());
expressOBJ.use(bodyparser.json());

// // Routes
// expressOBJ.use('/product', productRouter);

// Test route
expressOBJ.get('/b', (req, res) => {
    res.json({ msg: "API working successfully" });
});

// Setup Socket.IO events (channel)
io.on('connection', (socket) => {
    console.log('A client connected:', socket.id); //كدا عملنا السوكت فالسيرفر سايد
    // on -> name of event -> listen -> data 
    // emit -> send to clint


    // Handle a custom event (example)
    socket.on('msg', (data) => {
        console.log('Received customEvent:', data.name);
        // socket.emit('serverResponse', { msg: 'Event received!' });
        socket.emit(`res`, `hello` + data.name + `welcome`); // res دا الكيي البباصي بيه وبستقبل بيه
        io.emit('res', 'hello From Server');// هبعت لكل المتوصلين والفوق هبعت للباعت الرسالة بس  
        socket.broadcast.emit(`res`, `hello` + data.name + `welcome`); // هبعت لكل الناس معدا الكلاينت الباعت منه الرسالة
        io.to(socket.id).emit(`res`, `hello` + data.name + `welcome`) // دي فالشات 1 ل 1 باخد ال id ببعت للباعت الرسالة بس 
    });

    socket.on('disconnect', () => {
        console.log('A client disconnected:', socket.id);
    });
});



// // Start server علي الويب
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
