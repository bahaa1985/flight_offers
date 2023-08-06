import * as offer from "../controller/offer.js"
import bodyParser from "body-parser";
const urlEncoded=bodyParser.urlencoded({extended:false})
import { Router } from "express"

const offerRouter=Router();

offerRouter.get("/",(req,res)=>{
    offer.getOffers().then((data)=>{
        res.status(200).send(data)
    })
    .catch((err)=>{
        res.status(500).send(err.message)
    })
})
.get("/:offerId",(req,res)=>{
    const offerId=req.params.offerId
    offer.getOffer(offerId).then((data)=>{
        res.status(200).send(data)
    })
    .catch((err)=>{
        res.status(500).send(err.message)
    })
})
.post("/new",urlEncoded,(req,res)=>{
    const agencyId=req.body.agencyId
    const date=req.body.date
    const transporterId=req.body.transporterId
    const depId=req.body.depId
    const arrivId=req.body.arrivId
    const seats=req.body.seats
    const price=req.body.price
    const discount=req.body.discount
    offer.newOffer(agencyId,depId,arrivId,date,transporterId,seats,price,discount).then(()=>{
        res.status(200).send("Offer is inserted")
    })
    .catch((err)=>{
        res.status(500).send(err.message)
    })
})
.patch("/:offerId",urlEncoded,(req,res)=>{
    const offerId=req.params.offerId
    const date=req.body.date
    const transporterId=req.body.transporterId
    const depId=req.body.depId
    const arrivId=req.body.arrivId
    const seats=req.body.seats
    const price=req.body.price
    const discount=req.body.discount
    offer.updateOffer(offerId,depId,arrivId,date,transporterId,seats,price,discount).then(()=>{
        res.status(200).send("Offer is updated")
    })
    .catch((err)=>{
        res.status(500).send(err.message)
    })
})

export default offerRouter