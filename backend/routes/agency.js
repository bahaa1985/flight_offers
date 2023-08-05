import { Router } from "express";
import * as agency from '../controller/agency.js'

const router=Router()

router.get("/",(req,res)=>{
    agency.getAgencies().then((data)=>{
        res.status(200).send(data)
    })
    .catch((err)=>{
        res.status(500).send(err.message)
    })
})
.get("/:agencyId",(req,res)=>{
    const agencyId=req.params.agencyId
    agency.getAgency(agencyId).then((data)=>{
        res.status(200).send(data)
    })
    .catch((err)=>{
        res.status(500).send(err.message)
    })
})
.post("/new",(req,res)=>{
    const name=req.body.name
    const username=req.body.username
    const email=req.body.email
    const password=req.body.password
    const mobile=req.body.mobile
    agency.newAgency(name,username,email,mobile,password).then(()=>{
        res.status(200).send("Agency " + name + " is inserted")
    })
    .catch((err)=>{
        res.status(500).send(err.message)
    })
})
.patch("/update",(req,res)=>{
    const name=req.body.name
    const username=req.body.username
    const email=req.body.email
    const password=req.body.password
    const mobile=req.body.mobile
    const suspend=req.body.suspend
    agency.newAgency(name,username,email,mobile,password,suspend).then(()=>{
        res.status(200).send("Agency " + name + " is inserted")
    })
    .catch((err)=>{
        res.status(500).send(err.message)
    })
})