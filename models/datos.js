const Sequelize = require('sequelize');
const db = require('../config/database');

const Persona = db.define('persona', {
    nombre: {
      type: Sequelize.STRING,
    },
    apellido: {
      type: Sequelize.STRING
    },
    direccion: {
      type: Sequelize.STRING
    }
});

module.exports = Persona;