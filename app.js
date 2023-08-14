const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const helmet = require('helmet');
require('dotenv').config();
const db = require('./models');
const Initial = db.sequelize;


// Routes
const testRoutes = require('./routes/testRoutes.js');

const app = express();

Initial.sync();

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
app.use('/api', testRoutes);


module.exports = app;