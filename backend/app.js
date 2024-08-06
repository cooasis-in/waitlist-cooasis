require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
const corsOptions = {
    origin: 'http://localhost',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    credentials: true
};

app.use(cors(corsOptions));

const dbUrl = process.env.MONGODB_URL;
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection open");
}).catch(err => {
    console.log("OH NO ERROR");
    console.log(err);
})

app.use('/', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});