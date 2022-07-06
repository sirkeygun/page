const express = require('express')
const app = express()

app.use(express.static('public'))

app.set('view engine', 'ejs')



const userRouter = require('./routes/user')

app.use('/user', userRouter)

app.listen(3001);
