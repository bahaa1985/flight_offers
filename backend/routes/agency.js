import { Router } from "express";
import * as agency from '../controller/agency.js'

const router=Router()

router.get("/",(req,res)=>{
    agency.getAgencies().then((data)=>{
        res.status(200).send(data)
    })
    .catch((err)=>{
        res.status(600).send(err.message)
    })
})