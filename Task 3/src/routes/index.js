const express = require('express');
const {createFileCart} = require('../controller/getListForUser');
const findCarByPlateNumber = require('../controller/searchByPlateId');
const router = express.Router();


const path = require('path');
const multer = require('multer');
const uploadDir = path.join(__dirname, '../../uploads/');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });


router.get('/', findCarByPlateNumber);

router.post('/file', upload.single('file'), createFileCart);

router.post('/comment', (req, res) => {
    res.send('Comment added successfully');
});




