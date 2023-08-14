const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ajaxphp', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
