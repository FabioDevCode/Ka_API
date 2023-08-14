const Sequelize = require('sequelize');
const script_conf = require('../config/script_config');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME || script_conf.DB_NAME,
    process.env.DB_USER || script_conf.DB_USER,
    process.env.DB_PWD || script_conf.DB_PWD,
    {
        host: process.env.DB_HOST || script_conf.DB_HOST,
        dialect: process.env.DB_DIALECT || script_conf.DB_DIALECT,
        port: process.env.DB_PORT || script_conf.DB_PORT,
        logging: false
    }
);

const models = {};

models.Sequelize = Sequelize;
models.sequelize = sequelize;

// lister les models ici
models.entreprise = require('./entrepriseModel')(sequelize, Sequelize);

module.exports = models;