require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

// mongoose.connect(process.env.MONGODB_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true
// })
//     .then(() => console.log('MongoDB connected'))
//     .catch((err) => console.log(err));

app.use('/api', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
