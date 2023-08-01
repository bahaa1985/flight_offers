import { Router } from "express";
import * as airport_model from '../admin/airport.js'
const router=Router();

export const airport_router=router.get('/',(req,res)=>{
    try{
        airport_model.getAirports().then(
         (data)=>{
             res.send(data) 
         }
        )         
     }
     catch{
         res.status(500).json(Error)
     }
})

