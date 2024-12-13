const express = require('express'); // Express framework
const expressOBJ = express(); // Initialize Express
const bodyparser = require('body-parser'); // Parse request bodies
const cors = require('cors'); // Handle cross-origin requests
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

// Middleware
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


});

// Start the server
startServer(httpserver);
