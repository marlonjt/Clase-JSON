const express = require('express');
const router = express.Router();
const Persona = require('../models/datos');

router.get('/personas', async (req, res) => {
  try {
    const data = await Persona.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/personas', async (req, res) => {
  try {
    const { nombre, apellido, direccion, lat, lng } = req.body;
    const nueva = await Persona.create({ nombre, apellido, direccion, lat, lng });
    res.status(201).json(nueva);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
