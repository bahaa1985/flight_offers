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
.post("/new",urlEncoded,bodyParser.json(),async (req,res)=>{
    //generating hashed password: 
      
    const salt =bcrypt.genSaltSync(10)  
    const hashedPass=bcrypt.hashSync(req.body.password,salt)  
    ///
    const name=req.body.name
    const email=req.body.email
    const password= hashedPass
    const mobile=req.body.mobile
    const user_type=req.body.user_type
     
    await user.newUser(name,email,mobile,password,user_type).then((data)=>{
        res.status(200).send(data.toJSON())
    })
    .catch((err)=>{
        console.log(err);
        res.status(400).send(err)
    })
})
.patch("/update/:userId",urlEncoded,bodyParser.json(),async (req,res)=>{
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
    await user.updateUser(userId,name,email,mobile,user_type).then((data)=>{
        res.status(200).send(data.toJSON())
        console.log(req.body)
    })
    .catch((err)=>{
        res.status(400).send(err.message)
    })
})

export default userRouter