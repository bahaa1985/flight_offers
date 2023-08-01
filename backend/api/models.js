// import { model , InferSchemaType} from "mongoose";
import mongoose from "mongoose";
import { Schema,Types } from "mongoose";

const schema_admin=new Schema({
    name:{type:String,required:true,min:[6,"اسم الدخول لا يقل عن 6 أحرف"]},username:{type:String,required:true},
    password:{type:String,required:true,min:[8,'كلمة المرور يجب أن لا تقل عن 8 أحرف مع رموز و أرقام']}
})


const schema_airport=new Schema({
    name:{type:String,required:true,min:[3,"اسم المطار يجب أن لا يقل عن 3 أحرف"]},code:{type:String,required:true}
})


const schema_agency=new Schema({
    name:{type:String,required:true,min:[3,"اسم الشركة لا يقل عن 3 أحرف"]},username:{type:String,required:true,min:[6,"اسم الدخول لا يقل عن 6 أحرف"]},
    password:{type:String,required:true,min:[8,'كلمة المرور يجب أن لا تقل عن 8 أحرف مع رموز و أرقام']},email:{type:String,required:true},mobile:{type:String,required:true,min:[11,"رقم الموبايل يجب أن لا يقل عن 11 رقم"]}
})


const schema_transporter=new Schema({
    name:{type:String,required:true,min:[6,"اسم الناقل لا يقل عن 3 أحرف"]},image:{type:Buffer}
})


const schema_company=new Schema({
    name:{type:String,required:true,min:[3,"اسم الشركة لا يقل عن 3 أحرف"]},username:{type:String,required:true,min:[6,"اسم الدخول لا يقل عن 6 أحرف"]},
    password:{type:String,required:true,min:[8,'كلمة المرور يجب أن لا تقل عن 8 أحرف مع رموز و أرقام']},email:{type:String,required:true},mobile:{type:String,required:true}
})

const schema_offer=new Schema({
    agencyId:{type:Types.ObjectId,required:true},departureId:{type:Types.ObjectId,required:true},arriveId:{type:Types.ObjectId,required:true},
    travelDte:{type:Date,required:true},seatCount:{type:Number,required:true,min:[1,"عدد المقاعد يجب أن لا يقل عن 1"]},
    price:{type:Number,required:true,min:[900,"السعر لا يجب ان يقل عن 900 جنيه"]},discount:{type:Number,min:[50,"الخصم لا يجب ان يقل عن 50 جنيه"]}
})


const schema_sales=new Schema({
    offerId:{type:Types.ObjectId,required:true},companyId:{type:Types.ObjectId,required:true},passengerName:{type:String,required:true,min:[6,"اسم الراكب لا يجب أن يقل عن 6 حروف"]},    
    orderDate:{type:Date,required:true},price:{type:Number,required:true}
})

export const admin=mongoose.model('Admin',schema_admin)
export const airport=mongoose.model('Airport',schema_airport)
export const agency=mongoose.model('Agency',schema_agency)
export const transporter=mongoose.model('Transporter',schema_transporter)
export const company=mongoose.model('Company',schema_company)
export const offer=mongoose.model('Offer',schema_offer)
export const sales=mongoose.model('Sales',schema_sales)
// export const models=[admin,agency,company,airport,transporter,offer,sales]
