const express = require('express');
var router = express.Router();

const {burgerCommands} = require('../models/burger');

router.get('/all', (req, res) => {
    burgerCommands.selectAllBurgers((results) => {
        res.send(results);
    });
});

router.post('/new', (req, res) => {
    var userBurger = req.body.burgerName;
    burgerCommands.insertOneBurger(userBurger, (results) => {
        res.send(results);
    });
});

router.patch('/modify', (req, res) => {
    var devoured = req.body.devoured;
    var burgerID = req.body.burgerID;
    burgerCommands.updateOneBurger(devoured, burgerID, (results) => {
        res.send(results);
    });
});

module.exports = {
    router
};

