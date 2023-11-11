const dotenv = require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(bodyParser.json())


app.get("/", (req,res)=>{
    res.send("home")
})

const PORT = process.env.PORT || 5000

mongoose
       .connect(process.env.MONGO_URI)
       .then(()=>{
        app.listen(PORT, ()=>{
            console.log(`app running in port ${PORT}`)
        })
       })
       .catch((err)=>console.log(err))
