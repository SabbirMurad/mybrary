const mongoose = require('mongoose')

mongoose.set('strictQuery',true)

const connectDB = (url)=>{
  mongoose.connect(url)
    .then(()=>console.log('connected to mongoose'))
    .catch((err)=>console.log(err))
}

module.exports = connectDB