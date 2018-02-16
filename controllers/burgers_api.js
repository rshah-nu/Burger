const express = require('express');
var router = express.Router();

const {burgerCommands} = require('../models/burger');

router.get('/all', (req, res) => {
    burgerCommands.selectAllBurgers((results) => {
        res.json(results);
    });
});

router.post('/new', (req, res) => {
    var userBurger = req.body.burgerName;
    burgerCommands.insertOneBurger(userBurger, (results) => {
        res.json(results);
    });
});

router.put('/modify', (req, res) => {
    var devoured = req.body.devoured;
    var burgerID = req.body.burgerID;
    burgerCommands.updateOneBurger(devoured, burgerID, (results) => {
        res.json(results);
    });
});

module.exports = {
    router
};

