
import 'dotenv/config'
import airportRouter from './routes/airports.js'
import transporterRouter from './routes/transporter.js'
import userRouter from './routes/user.js'
import offerRouter from './routes/offer.js'
import mongoose from 'mongoose'
import express from 'express'

const app=express()
const PORT=process.env.PORT
const URI=process.env.CONNECTION

app.get('/',(req,res)=>{
    mongoose.connect(URI)
    .then(
        ()=>{           
            res.send("DB is connected!");                  
        }
    ).catch(
        (err)=>{
            res.send(err);
        }
    )
})

app.use('/airports',airportRouter)

app.use('/transporters',transporterRouter)

app.use('/users',userRouter)

app.use('/offers',offerRouter)

app.listen(PORT,()=>{
    console.log("App is running on port: "+PORT);
})

