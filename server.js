require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const burgerAPI = require('./controllers/burgers_api')
const burgerHTML = require('./controllers/burgers_html');

const environment = process.env.NODE_ENV || 'development';
var PORT = process.env.EXPRESS_PORT || 3000;

var app = express();
console.log(__dirname)

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static('public'));

app.use('/', burgerHTML.router);
app.use('/api', burgerAPI.router);

app.listen(PORT, () => {
    console.log(`Express is listening on port ${PORT}`);
})
