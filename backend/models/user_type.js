import mongoose from "mongoose";
import { Schema , Types} from "mongoose";
const schema_user_type=new Schema({
    user_type:{type:String,required:true}
})

function user_type_func(){
 const User_Type=mongoose.model('User_Type',schema_user_type)

if(User_Type.countDocuments()<1){
    User_Type.insertMany([{user_type:'admin'},{user_type:'agency',user_type:'company'}]).then(()=>{
        console.log("User types are inserted")
    })
    .catch((err)=>{
        return err
    })
}
}

export default user_type_func