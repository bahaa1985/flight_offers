import express from "express";
import * as airport_model from '../admin/airport.js'
import bodyParser from "body-parser";
import mongoose, { MongooseError } from "mongoose";
const urlEncoded=bodyParser.urlencoded({extended:false})
const airportRouter=express.Router();

airportRouter.get('/',(req,res)=>{
    try{
        airport_model.getAirports().then(
         (data)=>{
             res.send(data) 
         }
        )         
     }
     catch(error){
         res.status(500).send(error)
     }
})
.post('/newAirport',urlEncoded,(req,res)=>{    
    const name=req.body.name
    const code=req.body.code
    // res.send(req.body)
    airport_model.insertAirport(name,code).then(()=>{
        res.status(200).send("Airport is created")
        if(!name){
            // throw createhttpErrors(400,) setup http-errors
        }
    })
    .catch((error)=>{
        res.status(500).send(error.message)
    })
    // try {
       
    // } catch  {
    //     // res.send()
    //     // next(error)
    //     throw Error
    // }
    // res.send("post new airport")
})

export default airportRouter

