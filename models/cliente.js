const { DataTypes } = require('sequelize');
const db = require('../db/database');

const Cliente = db.define('Cliente', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cliente: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cidade: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'clientes', // O nome da tabela no banco de dados
  timestamps: false, // Remove o recurso de timestamps automáticos
});

module.exports = Cliente;
