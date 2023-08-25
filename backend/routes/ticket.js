import * as tickets from '../controller/ticket.js'
import { Router } from 'express'
import bodyParser from 'body-parser'
const urlEncode=bodyParser.urlencoded({extended:false})
const router=Router()

router.get('/',(req,res)=>{
    tickets.getTickets().then((result)=>{
        res.status(200).send(result)
    })
    .catch((err)=>{
        res.status(500).send(err.message)
    })
})
.get('/:ticketId',(req,res)=>{
    const ticketId=req.params.ticketId
    tickets.getTicket(ticketId).then((result)=>{
        res.status(200).send(result)
    })
    .catch((err)=>{
        res.status(500).send(err.message)
    })
})
.post('/new',urlEncode,(req,res)=>{
    const companyId=req.body.companyId
    const offerId=req.body.offerId
    const name=req.body.passenger_name
    const mobile=req.body.passenger_mobile
    tickets.newTicket(companyId,offerId,name,mobile).then(()=>{
        res.status(200).send("ticket of "+ name + "is inserted")
    })
    .catch((err)=>{
        res.status(500).send(err.message)
    })
})
.patch('/:ticketId',(req,res)=>{
    const ticketId=req.params.ticketId
    const companyId=req.body.companyId
    const offerId=req.body.offerId
    const name=req.body.passenger_name
    const mobile=req.body.passenger_mobile
    tickets.updateTicket(ticketId,name,mobile).then(()=>{
        res.status(200).send("ticket is updated")
    })
    .catch((err)=>{
        res.status(500).send(err.message)
    })
})