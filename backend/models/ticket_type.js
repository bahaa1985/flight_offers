import mongoose from "mongoose";
import { Schema , Types} from "mongoose";

const schema_ticket_type=new Schema({    
    ticket_type:{type:String,required:true}
})

export default function ticket_type_func(){
const Ticket_Type=mongoose.model('Ticket_Type',schema_ticket_type)

if(Ticket_Type.countDocuments()<1){
    Ticket_Type.insertMany([{ticket_type:'جديد'},{ticket_type:'تعديل'},{ticket_type:'الغاء'}]).then(()=>{
        console.log( "ticket types are inserted")
    })
    .catch((err)=>{
        return err
    })  
}
}