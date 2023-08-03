import mongoose from "mongoose";
import * as transporters from "../controller/transporter.js"
import { Router } from "express";

const router=Router()

router.get("/",(req,res)=>{    
    transporters.getTransporters().then((data)=>{
        res.status(200).send(data)
    })
    .catch((error)=>{
        res.status(500).send(error.message)
    })
})
.get("/:transporterId",(req,res)=>{

})
.post("/newTransporter",(req,res)=>{

})
.patch("/:transporterId",(req,res)=>{
    const transporterId=req.params.transporterId
    const name =req.body.name
    const image=req.body.image
    transporters.updateTransporter(transporterId,name,image).then(()=>{

    })
    .catch((error)=>{
        
    })
})