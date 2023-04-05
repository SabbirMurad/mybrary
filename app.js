const express = require('express');
require('dotenv').config()
const app = express();
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')

const port = process.env.PORT || 3000
const connectDB = require('./database/connection')

app.set('view engine', 'ejs')
app.set('views',__dirname+'/views')
app.set('layout','layouts/layout')

app.use(express.json())
app.use(expressLayouts)
app.use(express.static('public'))
app.use('/',indexRouter)


const start = async ()=>{
  try{
    await connectDB(process.env.MONGO_URI)
    app.listen(port,()=>console.log(`connected to port : ${port}`))
  }
  catch(err){
    console.log(err)
  }
}

start();