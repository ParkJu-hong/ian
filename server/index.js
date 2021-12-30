require('dotenv').config();
// const fs = require('fs');
// const https = require('https'); http로 구현하고 그다음에 https로 바꾸자
const http = require('http');
const cors = require('cors');
// const cookieParser = require('cookie-parser');
const parser = require('body-parser');
const express = require('express');
const controllers = require('./controllers');
require("dotenv").config();
const fs = require('fs');

const path = require('path');
const multer = require('multer');
const upload = multer({ dest: './'})
// const upload = multer({
//   storage: multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './img/');
//     },
//     filename: function (req, file, cb) {
//       cb(null, new Date().valueOf() + path.extname(file.originalname));
//     }
//   }),
// });
// const multer = require('multer');

const AWS = require('aws-sdk');
const SESConfig = {
    apiVersion: "2015-03-31",
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    accessSecretKey: process.env.AWS_SECRET_KEY,
    region: "ap-northeast-2"
}
AWS.config.update(SESConfig);

const S3 = new AWS.S3();


const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }))
// app.use(cors({
//     origin: '*',
//     methods: ['GET', 'POST', 'OPTIONS'],
//     credentials: true
// }))
app.use(cors());
app.use(parser.json());


app.get('/gallery/read', controllers.read);
app.post('/gallery/create', controllers.create);
app.post('/uploadfile', upload.single('img'),(req, res) => {
    S3.listBuckets(function (err, data) {
        if (err) {
            console.log("listBuckets Error", err);
        } else {
            console.log("listBuckets Success", data.Buckets);
        }
    });
    console.log(new Date().toLocaleTimeString());
    console.log('req.file : ', req.file); 
    // console.log('req.params')

    // fs.readFile(req.files.file.path, function(err, data){
    //     // Do something with the data (which holds the file information)
    //     console.log('req.files.file.path : ', req.files.file.path);
    //     if(err){
    //         console.log('err : ', err);
    //     }else{
    //         console.log('data : ', data);
    //     }
    // });

    res.status(201).send('OK')
})

app.listen(3001, () => {
    console.log('서버가 실행되었습니다')
})

// const server = http.createServer((req, res) => {
//     res.end();
//     return;
// }).listen(3001);

// module.exports = server;