import mongoose from "mongoose";
import bodyParser from "body-parser";
const urlEncoded=bodyParser.urlencoded({extended:false})
import * as transporters from "../controller/transporter.js"
import { Router } from "express";
import upload from '../api/upload.js'

const transporterRouter=Router()

transporterRouter.get("/",(req,res)=>{    
    transporters.getTransporters().then((data)=>{
        res.status(200).send(data)
    })
    .catch((error)=>{
        res.status(500).send(error.message)
    })
})
.get("/:transporterId",(req,res)=>{

})
.post("/newTransporter",upload.single("image"),(req,res,next)=>{
    console.log(req.file)
    // next()
    const name=req.body.name
    const imagename=req.file.filename
    // res.send(image.filename)
    // next()
    transporters.insertTransporter(name,imagename).then(
        ()=>{
            res.status(200).send("Transporter is inserted")
        }
    )
    .catch((err)=>{
        res.status(500).send(err.message)
    })
    next();
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

export default transporterRouter