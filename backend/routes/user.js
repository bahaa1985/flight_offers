import { Router } from "express";
import * as user from '../controller/user.js'
import bodyParser from "body-parser";
const urlEncoded=bodyParser.urlencoded({extended:false})

const userRouter=Router()

userRouter.get("/",(req,res)=>{
    user.getUsers().then((data)=>{
        res.status(200).send(data)
    })
    .catch((err)=>{
        res.status(500).send(err.message)
    })
})
.get("/:userId",(req,res)=>{
    const userId=req.params.userId
    user.getUser(userId).then((data)=>{
        res.status(200).send(data)
    })
    .catch((err)=>{
        res.status(500).send(err.message)
    })
})
.post("/new",urlEncoded,(req,res)=>{
    const name=req.body.name
    const username=req.body.username
    const email=req.body.email
    const password=req.body.password
    const mobile=req.body.mobile
    const userId=req.body.userId
    user.newUser(name,username,email,mobile,password,userId).then(()=>{
        res.status(200).send("User " + name + " is inserted")
    })
    .catch((err)=>{
        res.status(500).send(err.message)
    })
})
.patch("/update",urlEncoded,(req,res)=>{
    const name=req.body.name
    const username=req.body.username
    const email=req.body.email
    const password=req.body.password
    const mobile=req.body.mobile
    const suspend=req.body.suspend
    user.updateUser(name,username,email,mobile,password,suspend).then(()=>{
        res.status(200).send("User " + name + " is updated")
    })
    .catch((err)=>{
        res.status(500).send(err.message)
    })
})

export default userRouter