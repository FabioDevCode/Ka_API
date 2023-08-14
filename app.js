const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const helmet = require('helmet');
require('dotenv').config();
const models = require('./models');

// Routes
// ----

const app = express();

models.sequelize.sync();

const corsOptions = {
    origin: '*'
}

app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());
app.use(helmet());

// API
console.log(path.join(__dirname, 'images'));
app.use('/images', express.static(path.join(__dirname, '/public/images')));


module.exports = app;