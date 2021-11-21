const Sequelize = require('sequelize');

const sequelize = new Sequelize("postgres://postgres:5b12cf03597f460f93dda131b8fc2370@localhost:5432/eleven-journal");

module.exports = sequelize;