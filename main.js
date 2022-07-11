require("dotenv").config()

var express = require('express');
var app = express();

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)

// set the view engine to ejs
const ejs = require('ejs')
app.set('view engine', 'ejs')
app.use(express.static('public'))

const bodyParser = require('body-parser');
app.use(bodyParser.json({limit: "25mb"}));
app.use(bodyParser.urlencoded({ extended: true, limit: "25mb" }));

// Import Controllers
const homepageControllers = require('./controllers/homepage');
const contactusController = require('./controllers/contactUs')
const aboutController = require('./controllers/aboutus')
const storeDeviceController = require('./controllers/storeDevices')
const viewPostController = require('./controllers/viewPost')
const contactusformController = require('./controllers/contactusform')

// Create routes
app.get('/', homepageControllers)
app.get('/contactus', contactusController)
app.get('/about', aboutController)
app.post('/post/blog', storeDeviceController)
app.get('/post/:id', viewPostController)
app.post('/contact/us', contactusformController)

const port = process.env.PORT || 3100;

app.listen(port)
console.log(`Server is listening on port ${port}`);
