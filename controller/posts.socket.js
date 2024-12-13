const express = require('express'); // تعديل اسم المتغير إلى express
const router = express.Router();
const postController = require('../controller/posts.socket'); // تأكد من وجود الملف والمسمى بشكل صحيح

// Route: GET /
router.get('/', postController.getPosts);

// Route: POST /
router.post('/', (req, res) => {
    const name = req.body.name;
    const price = req.body.price;

    res.status(201).json({
        "message": "Successfully added!",
        "data": {
            "name": name,
            "price": price
        }
    });
});

// Route: GET /users
router.get('/users', (req, res) => {
    res.json({ "name": "ahmed", "password": 123456789 });
});

module.exports = router;
