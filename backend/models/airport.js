import mongoose from "mongoose";
import { Schema } from "mongoose";

const schema_airport=new Schema({
    name:{type:String,required:true,minLength:[3,"اسم المطار يجب أن لا يقل عن 3 أحرف"]},code:{type:String,required:true}
})

export const Airport=mongoose.model('Airport',schema_airport)