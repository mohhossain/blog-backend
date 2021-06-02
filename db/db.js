const Sequelize = require('sequelize');
const { name } = require('../package.json');
require("dotenv").config();

// Initialize database with Sequelize
const db = new Sequelize('postgres://postgres:faiaz1231@localhost/backend', {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
  }
});

module.exports = db;
