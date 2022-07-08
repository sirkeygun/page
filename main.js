require("dotenv").config()

var express = require('express');
var app = express();

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)

// set the view engine to ejs
const ejs = require('ejs')
app.set('view engine', 'ejs')
app.use(express.static('public'))

// Import Controllers
const homepageControllers = require('./controllers/homepage');
const contactusController = require('./controllers/contactUs')
const aboutController = require('./controllers/aboutus')

// Create routes
app.get('/', homepageControllers)
app.get('/contactus', contactusController)
app.get('/about', aboutController)


app.listen(8080);
console.log('Server is listening on port 8080');