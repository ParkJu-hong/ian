require('dotenv').config();
// const fs = require('fs');
// const https = require('https'); http로 구현하고 그다음에 https로 바꾸자
const http = require('http');
const cors = require('cors');
// const cookieParser = require('cookie-parser');
const express = require('express');
const controllers = require('./controllers')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true
}))

app.get('/gallery/read', controllers.read);
app.post('/gallery/create', controllers.create);

app.listen(3001, () => {
    console.log('서버가 실행되었습니다')
})

// const server = http.createServer((req, res) => {
//     res.end();
//     return;
// }).listen(3001);

// module.exports = server;