import mongoose from "mongoose";
import { Schema , Types} from "mongoose";
const schema_user_type=new Schema({
    user_type:{type:String,enum:['admin','agency','company'],required:true}
})

export const User_Type=mongoose.model('User_Type',schema_user_type)