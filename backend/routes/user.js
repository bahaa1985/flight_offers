import { Router } from "express";
import * as user from '../controller/user.js'
import bodyParser from "body-parser";
import bcrypt from 'bcrypt'
const urlEncoded=bodyParser.urlencoded({extended:false})

const userRouter=Router()

userRouter.get("/",(req,res)=>{
    user.getUsers().then((data)=>{
        res.status(200).send(data)
    })
    .catch((err)=>{
        res.status(400).send(err.message)
    })
})
.get("/:userId",(req,res)=>{
    const userId=req.params.userId
    user.getUser(userId).then((data)=>{
        res.status(200).send(data)
    })
    .catch((err)=>{
        res.status(400).send(err.message)
    })
})
.post("/new",urlEncoded,(req,res)=>{
    //generating hashed password:    
    const salt =bcrypt.genSaltSync(10)  
    const hashedPass=bcrypt.hashSync(req.body.password,salt)  
    ///
    const name=req.body.name
    const email=req.body.email
    const password= hashedPass
    const mobile=req.body.mobile
    const user_type=req.body.user_type
    user.newUser(name,email,mobile,password,user_type).then(()=>{
        res.status(200).send("User " + name + " is inserted")
    })
    .catch((err)=>{
        res.status(400).send(err.message)
    })
})
.patch("/update/:userId",urlEncoded,(req,res)=>{
     //generating hashed password:
    //  const salt=bcrypt.genSalt(10)
    //  const hashedPass=bcrypt.hashSync(req.body.password,salt)  
     ///
    const userId=req.params.userId
    const name=req.body.name
    const email=req.body.email
    // const password=hashedPass
    const mobile=req.body.mobile
    const user_type=req.body.user_type
    user.updateUser(userId,name,email,mobile,user_type).then(()=>{
        res.status(200).send("User " + name + " is updated")
    })
    .catch((err)=>{
        res.status(400).send(err.message)
    })
})

export default userRouter