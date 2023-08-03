import mongoose from "mongoose"
import { Schema } from "mongoose"

const schema_transporter=new Schema({
    name:{type:String,required:true,min:[6,"اسم الناقل لا يقل عن 3 أحرف"]},image:{type:Buffer}
})

export const Transporter=mongoose.model('Transporter',schema_transporter)