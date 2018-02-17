const express = require('express');
var router = express.Router();
// Literally, the worst line of code I have ever written
const axios = require('axios');

router.get('/', (req, res) => {
    axios.get('https://dry-journey-75930.herokuapp.com/api/all')
        .then((burgerData) => {
            // console.log(burgerData);
            res.render("index", {burger_data: burgerData.data});
        })
        .catch((err) => {
            console.log(err);
        });
});



module.exports = {
    router
};


