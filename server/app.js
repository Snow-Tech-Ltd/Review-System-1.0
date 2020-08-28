const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const config = require('./config/database');

mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
    console.log('Connected to database' + config.database);
});

mongoose.connection.on('error', (err) => {
    console.log('Database Error: ' + err)
});

// Port Number
const port = 3000;

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

const review = require('./routes/review'); 
app.use(bodyParser.json());

app.use('/review', review);

app.get('/', (req, res) => {
    res.send("HI");
});

app.listen(port, () => {
    console.log("Server startted on port " + port);
});