import { Schema, Types, model } from "mongoose"
const schema_user=new Schema({
    name:{type:String,required:true,min:[3,"اسم الشركة لا يقل عن 3 أحرف"]},
    username:{type:String,required:true,min:[6,"اسم الدخول لا يقل عن 6 أحرف"]},
    password:{type:String,required:true,min:[8,'كلمة المرور يجب أن لا تقل عن 8 أحرف مع رموز و أرقام']},
    email:{type:String,required:true},
    mobile:{type:String,required:true,min:[11,"رقم الموبايل يجب أن لا يقل عن 11 رقم"]},
    suspend:{type:Boolean,default:false},
    user_type:{type:String,required:true}
})

const User=model("User",schema_user)

export default User