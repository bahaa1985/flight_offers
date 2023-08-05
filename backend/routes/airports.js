import express from "express";
import * as airports from '../controller/airport.js'
import bodyParser from "body-parser";
import  createhttpErrors  from "http-errors";
import mongoose from "mongoose";
const urlEncoded=bodyParser.urlencoded({extended:false})
const airportRouter=express.Router();

airportRouter.get('/',(req,res)=>{
    try{
        airports.getAirports().then(
         (data)=>{
             res.send(data) 
         }
        )         
     }
     catch(error){
         res.status(500).send(error)
     }
})
.post('/new',urlEncoded,async (req,res)=>{    
    const name=req.body.name
    const code=req.body.code
    console.log(req.body.name)
    await airports.newAirport(name,code).then(()=>{               
        res.status(200).send("Airport is created")
    })
    .catch((error)=>{
        res.status(500).send("inserting failed:"+error.message)
    })   
})
.get('/:airportId',(req,res)=>{
    const id=req.params.airportId
    airports.getAirport(id).then((data)=>{
       res.send(data)
    })
    
})
.patch('/:airportId',urlEncoded,async (req,res)=>{
    const airportId=req.params.airportId
    const newName=req.body.name
    const newCode=req.body.code 
    await airports.updateAirport(airportId,newName,newCode).then(()=>{
        res.status(200).send("Airport is updated")
    })
    .catch((error)=>{
        res.status(500).send("updating failed:"+error.message)
    })
})

export default airportRouter

