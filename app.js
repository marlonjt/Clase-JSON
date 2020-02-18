const express = require('express');
const Sequelize = require('sequelize');
const path = require('path');

// conexion a la base de datos 
const db = require('./config/database');

db.authenticate()
.then(() => {
  console.log('Conectado  con sequelize');
})
.catch(err => {
  console.error('error :(' + err);
});

const app = express();
//las rutas en localhost

app.use('/api',require ('./routes/ruta'));

const port = process.env.PORT || 3000;


app.get('/',(req,res)=>{
    res.send('clase de ayer');
});

app.listen(port,()=>{
    console.log(`Puerto ${port}`);
});