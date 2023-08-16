const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const helmet = require('helmet');
require('dotenv').config();
const models = require('./models');

// Routes
const entreprise_routes = require('./routes/entrepriseRoutes');
const generate_routes = require('./routes/generateRoutes');


const app = express();
models.sequelize.sync();

app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(morgan('dev'));
app.use(express.json());
app.use(helmet({
    crossOriginResourcePolicy: false
}));

// API
app.use('/images', express.static(path.join(__dirname, '/public/images')));
app.use('/api/entreprise', entreprise_routes);
app.use('/api/generate', generate_routes);


module.exports = app;