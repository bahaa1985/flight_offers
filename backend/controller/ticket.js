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

export async function updateTicket(ticketId,passenger_name,passenger_mobile,price){ //update passenger info or price
    const ticket=Ticket.findByIdAndUpdate(ticketId,{"passenger_name":passenger_name,"passenger_mobile":passenger_mobile,"price":price}).exec()
    await ticket
}

export async function changeTicket(companyId,offerId,passenger_name,passenger_mobile,price){ //insert new ticket and set ticket type to 'updated'
    const new_ticket=new Ticket({"companyId":companyId,"offerId":offerId,"passenger_name":passenger_name,"passenger_mobile":passenger_mobile,"price":price,"ticket_type":2})
    await new_ticket.save() 
}

export async function deleteTicket(ticketId,ticket_type){ //set ticket type to 'deleted' when cancelling ticket. It will not deleted actually.
    const ticket=Ticket.findByIdAndUpdate(ticketId,{"ticket_type":ticket_type})
    await ticket
}