import mongoose, { Mongoose } from "mongoose";
import {Transporter} from "../models/transporter.js"

export async function getTransporters(){
    const transporters=Transporter.find().exec();
    return transporters
}

export async function newTransporter(name,image){
    const transporter =new Transporter({"name":name,"image":image})
    await transporter.save();
}

export async function updateTransporter(transporterId,name,image){
    await Transporter.findByIdAndUpdate(transporterId,{name:name,image:image})
}
