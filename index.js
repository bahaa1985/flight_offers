//home react page:
import React from "react";
import ReactDOM  from "react-dom/client";
import App from "./app.js";
const rootElement=<div></div>
const root = ReactDOM.createRoot(rootElement)
root.render(<App/>);

//server side:
import 'dotenv/config'
import insert_airport from './admin/admin-api/airport.js'
import mongoose from 'mongoose'
import express from 'express'
const app=express()
const port=process.env.PORT
const uri=process.env.CONNECTION
const connection =mongoose.createConnection(uri)
app.get('/',(req,res)=>{
    mongoose.connect(uri)
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

app.get('/new_airport',(req,res)=>{
    insert_airport(connection)
    .then(
        ()=>{
            res.send("airport is inserted")
        }
    )
    .catch(
        (err)=>{
            res.send(err)
        }
    )
})


app.listen(port,()=>{
    console.log("App is running on port: "+port);
})

