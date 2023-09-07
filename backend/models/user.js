import mongoose, { Schema } from "mongoose"
const schema_user=new Schema({
    name:{type:String,required:true,min:[3,"اسم الشركة لا يقل عن 3 أحرف"]},
    password:{type:String,required:true,min:[8,'كلمة المرور يجب أن لا تقل عن 8 أحرف مع رموز و أرقام']},
    email:{type:String,required:true},
    mobile:{type:String,required:true,min:[11,"رقم الموبايل يجب أن لا يقل عن 11 رقم"]},
    suspend:{type:Boolean,default:false},
    user_type:{type:String,required:true}
})

export const User=mongoose.model("User",schema_user)
