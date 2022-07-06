const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()


// static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname +  'public/css'))

//set templating engine
app.use(expressLayouts)
app.set('view engine', 'ejs')

// navigation
app.get('', (req, res) => {
    res.render('index')
})


app.listen(3021);
