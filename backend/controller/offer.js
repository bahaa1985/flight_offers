import { Offer } from "../models/offer.js"

export async function getOffers(){
    const offers=await Offer.find().exec()
    return offers    
}

export async function getOffer(offerId){
    const offer=await Offer.findById(offerId).exec();
    return offer
}

export async function newOffer(agencyId,depId,arrId,travelDate,transporterId,seats,price,discount){
    const offer=new Offer({"agencyId":agencyId,"departureId":depId,"arriveId":arrId,"transporterId":transporterId,
    "travelDate":new Date(travelDate).toDateString(),"seats":seats,"price":price,"discount":discount})
    await offer.save();
}

export async function updateOffer(offerId,depId,arrId,travelDate,transporterId,seats,price,discount){
    await Offer.findByIdAndUpdate(offerId,{"departureId":depId,"arriveId":arrId,"transporterId":transporterId,
    "travelDate":new Date(travelDate).toDateString(),"seats":seats,"price":price,"discount":discount})    
}