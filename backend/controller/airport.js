
import { SchemaTypeOptions } from "mongoose"
import { Airport } from "../models/airport.js"

export async function getAirports(){ //get all airports
    const airports=await Airport.find().exec()   
    return airports
}

export async function getAirport(airportId){
    const airport=await Airport.findById(airportId).exec()
    return airport
}

export async function newAirport(name,code){   //insert new airport
    const newAirport=new Airport({"name":name,"code":code}) 
    await newAirport.save()    
}

export async function updateAirport(airportId,name,code){ //update an airport    
   return await Airport.findByIdAndUpdate(airportId,{name:name,code:code}).exec().sa;     
}

