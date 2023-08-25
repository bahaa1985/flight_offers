import { Ticket } from "../models/ticket.js";

export async function getTickets(){
    const tickets=Ticket.find().exec()
    return tickets;
}

export async function getTicket(ticketId){
    const ticket=Ticket.findById(ticketId).exec()
    return ticket
}

export async function newTicket(companyId,offerId,passenger_name,passenger_mobile,price,ticket_type){
    const new_ticket=new Ticket({"companyId":companyId,"offerId":offerId,"passenger_name":passenger_name,"passenger_mobile":passenger_mobile,"price":price,"ticket_type":ticket_type})
    await new_ticket.save() 
}

export async function updateTicket(ticketId,passenger_name,passenger_mobile){
    const ticket=Ticket.findByIdAndUpdate(ticketId,{"companyId":companyId,"offerId":offerId,"passenger_name":passenger_name,"passenger_mobile":passenger_mobile}).exec()
    await ticket
}