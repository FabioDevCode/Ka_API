const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
require('dotenv').config();
const db = require('./models');
const Initial = db.sequelize;

// Pour donner accès à des images si besoin
const path = require('path');

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
app.use('/api', testRoutes);


module.exports = app;