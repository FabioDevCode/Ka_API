const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const helmet = require('helmet');
require('dotenv').config();
const models = require('./models');

// Routes
const entreprise_routes = require('./routes/entrepriseRoutes');


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
app.use('/images', express.static(path.join(__dirname, '/public/images')));
app.use('/api/entreprise', entreprise_routes);


module.exports = app;