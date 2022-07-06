const express = require('express')
const app = express()



app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    console.log('landing page')
    res.render('index')
    
    })

const userRouter = require('./routes/user')

app.use('/user', userRouter)

app.listen(3000);
