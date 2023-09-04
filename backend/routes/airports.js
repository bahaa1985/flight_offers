import express from "express";
import * as airports from '../controller/airport.js'
import bodyParser from "body-parser";
import  createhttpErrors  from "http-errors";
import mongoose from "mongoose";
const urlEncoded=bodyParser.urlencoded({extended:false})

const airportRouter=express.Router();

airportRouter.get('/',(req,res)=>{
    try{        
        airports.getAirports().then((result)=>{
           res.send(result)
        })
        .catch((err)=>{
            throw err
        })               
     }
     catch(error){
         res.status(500).send(error)
     }
})
.get('/:airportId',(req,res)=>{
    const id=req.params.airportId
    airports.getAirport(id).then((data)=>{
       res.send(data)
    })
    
})
.post('/new',urlEncoded,bodyParser.json(),async (req,res)=>{    
    const name=req.body.name
    const code=req.body.code
    console.log(req.body.name)
    await airports.newAirport(name,code).then((data)=>{               
        res.status(200).send(data.toJSON())
    })
    .catch((error)=>{
        res.status(500).send("inserting failed:"+error.message)
    })   
})
.patch('/update/:airportId',urlEncoded,bodyParser.json(),async (req,res)=>{
    const airportId=req.params.airportId
    const newName=req.body.name
    const newCode=req.body.code    
    await airports.updateAirport(airportId,newName,newCode).then((data)=>{
        res.status(200).send(data.toJSON())        
    })
    .catch((error)=>{
        res.status(500).send("updating failed:"+error.message)
    })  
})
.patch('/suspend/:airportId',urlEncoded,bodyParser.json(),async (req,res)=>{
    const airportId=req.params.airportId
    const suspend=req.body.suspend
    await airports.suspendAirport(airportId,suspend).then((data)=>{
        res.status(200).send(data.toJSON())
    })
    .catch((error)=>{
        res.status(500).send("Suspending failed:"+error.message)
    })
})
export default airportRouter

