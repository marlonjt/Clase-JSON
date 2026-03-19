require('dotenv').config();
const express = require('express');
const path = require('path');
const db = require('./config/database');

db.authenticate()
  .then(() => {
    console.log('Conectado con Sequelize');
    return db.sync();
  })
  .then(() => console.log('Tablas sincronizadas'))
  .catch(err => console.error('Error de conexión:', err));

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.use('/api', require('./routes/ruta'));

const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => console.log(`Servidor en puerto ${port}`));
