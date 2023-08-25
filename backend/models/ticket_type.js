import mongoose from "mongoose";
import { Schema , Types} from "mongoose";
const schema_ticket_type=new Schema({
    ticket_type:{type:String,enum:['جديد','تعديل','إلغاء'],required}
})

export const Ticket_Type=mongoose.model('Ticket_Type',schema_ticket_type)