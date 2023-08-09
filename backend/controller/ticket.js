import { Ticket } from "../models/ticket.js";

export async function getTickets(){
    const tickets=Ticket.find().exec()
    return tickets;
}

export async function getTicket(salesId){
    const ticket=Ticket.findById(salesId).exec()
    return ticket
}

export async function newTicket(companyId,offerId,passenger_name,passenger_mobile){
    const new_ticket=new Ticket({"companyId":companyId,"offerId":offerId,"passenger_name":passenger_name,"passenger_mobile":passenger_mobile})
    await new_ticket.save() 
}

export async function updateTicket(salesId,passenger_name,passenger_mobile){
    const ticket=Ticket.findByIdAndUpdate(salesId,{"companyId":companyId,"offerId":offerId,"passenger_name":passenger_name,"passenger_mobile":passenger_mobile}).exec()
    await ticket
}