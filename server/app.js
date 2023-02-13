const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
// app.use(morgan('combined'))
app.use(cors())
app.use(bodyparser.json())
app.get('/status',(req,res)=>{
    res.send("hii")
})
console.log("server start")
app.listen(process.env.PORT||8000)