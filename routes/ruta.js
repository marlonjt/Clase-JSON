const express = require('express');
const router = express.Router();
const db = require('../config/database');
const p = require('../models/datos');

router.get('/',(req,res)=> 
    p.findAll()
        .then(data => {
            console.log(data);
            res.sendStatus(200);
        })
        .catch(err => console.log(err))
);


module.exports = router;

