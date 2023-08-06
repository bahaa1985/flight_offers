// import { model , InferSchemaType} from "mongoose";
import mongoose from "mongoose";
import { Schema,Types } from "mongoose";

const schema_admin=new Schema({
    name:{type:String,required:true,min:[6,"اسم الدخول لا يقل عن 6 أحرف"]},username:{type:String,required:true},
    password:{type:String,required:true,min:[8,'كلمة المرور يجب أن لا تقل عن 8 أحرف مع رموز و أرقام']}
})

const schema_company=new Schema({
    name:{type:String,required:true,min:[3,"اسم الشركة لا يقل عن 3 أحرف"]},username:{type:String,required:true,min:[6,"اسم الدخول لا يقل عن 6 أحرف"]},
    password:{type:String,required:true,min:[8,'كلمة المرور يجب أن لا تقل عن 8 أحرف مع رموز و أرقام']},email:{type:String,required:true},mobile:{type:String,required:true}
})




const schema_sales=new Schema({
    offerId:{type:Types.ObjectId,required:true},companyId:{type:Types.ObjectId,required:true},passengerName:{type:String,required:true,min:[6,"اسم الراكب لا يجب أن يقل عن 6 حروف"]},    
    orderDate:{type:Date,required:true},price:{type:Number,required:true}
})

export const admin=mongoose.model('Admin',schema_admin)

export const company=mongoose.model('Company',schema_company)

export const sales=mongoose.model('Sales',schema_sales)
// export const models=[admin,agency,company,airport,transporter,offer,sales]
