import mongoose from "mongoose";
import { Schema , Types} from "mongoose";
const schema_offer=new Schema({
    agencyId:{type:Types.ObjectId,ref:'User',required:true},date:{type:String,required:true,default:new Date().toDateString()},
    departureId:{type:Types.ObjectId,ref:'Airport',required:true},arriveId:{type:Types.ObjectId,ref:'Airport',required:true},
    travelDate:{type:String,required:true},transporterId:{type:Types.ObjectId,ref:'Transporter',require:true},
    seats:{type:Number,required:true,min:[1,"عدد المقاعد يجب أن لا يقل عن 1"]},
    price:{type:Number,required:true,min:[900,"السعر لا يجب ان يقل عن 900 جنيه"]},discount:{type:Number,min:[0,"الخصم غير صحيح"]}
})

export const Offer=mongoose.model('Offer',schema_offer)