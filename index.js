import 'dotenv/config'
import models from './api/models.js'
import mongoose from 'mongoose'
import express from 'express'
const app=express()
const port=process.env.PORT

const connection=process.env.connection

app.get('/',(req,res)=>{
    mongoose.connect(connection)
    .then(
        ()=>{           
            res.send("DB is connected!"); 
            // airportModel.create({title:"Cairo",code:"CAI"})           
        }
    ).catch(
        (err)=>{
            res.send(err);
        }
    )
})

app.listen(port,()=>{
    console.log("App is running on port: "+port);
})

