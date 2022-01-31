const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const hpp = require('hpp')
const helmet = require('helmet')
const path = require("path");
const bodyParser = require("express");
const cookieParser = require('cookie-parser')
const userRouter = require('./routes/user')
const db = require('./models')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

db.sequelize.sync()
    .then(() => {
        console.log('db connect')
    })
    .catch(console.error)

app.use(helmet())

app.use(cors({
    origin:[process.env.FRONT_URL,'http://13.125.139.187',],
    credentials: true,
}))

app.use('/',express.static(path.join(__dirname,'profileImages')))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production'){
    app.use(morgan('combined'))
    app.use(hpp())
}else{
    app.use(morgan('dev'))
}

app.use('/user',userRouter)

app.listen(3065,() => {
    console.log("server open")
})
