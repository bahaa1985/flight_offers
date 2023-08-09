import mongoose from "mongoose";
import { Schema , Types} from "mongoose";
const schema_tickets=new Schema({
    companyId:{type:Types.ObjectId,ref:'User',required:true},offerId:{type:Types.ObjectId,ref:'Offer',required:true},date:{type:String,required:true,default:new Date().toDateString()},
    passenger_name:{type:String,required:true,min:[6,"تأكد من الاسم الصحيح"]},passenger_mobile:{type:String,min:[11,"رقم الهاتف المحمول خطأ"],required:true}
})

export const Ticket=mongoose.model('Ticket',schema_tickets)