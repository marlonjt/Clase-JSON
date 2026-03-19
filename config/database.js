const Sequelize = require('sequelize');

module.exports = new Sequelize(
  process.env.DB_NAME     || 'mapa',
  process.env.DB_USER     || 'postgres',
  process.env.DB_PASSWORD || '1234',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    pool: { max: 5, min: 0, acquire: 30000, idle: 10000 },
    logging: false
  }
);
