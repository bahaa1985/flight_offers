
import 'dotenv/config'
import airportRouter from './routes/airports.js'
import transporterRouter from './routes/transporter.js'
import mongoose from 'mongoose'
import express from 'express'
// import { airport } from './api/models.js'
const app=express()
const port=process.env.PORT
const uri=process.env.CONNECTION

app.get('/',(req,res)=>{
    mongoose.connect(uri)
    .then(
        ()=>{           
            res.send("DB is connected!"); 
            // airportModel.create({title:"Cairo",code:"CAI"})           
        }
    ).catch(
        (err)=>{
            res.send(err);
        }
    )
})

app.use('/airports',airportRouter)

app.use('/transporters',transporterRouter)

// app.get('/new_airport',(req,res)=>{
//     insert_airport(connection)
//     .then(
//         ()=>{
//             res.send("airport is inserted")
//         }
//     )
//     .catch(
//         (err)=>{
//             res.send(err)
//         }
//     )
// })


app.listen(port,()=>{
    console.log("App is running on port: "+port);
})

