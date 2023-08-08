import { Sales } from "../models/sales";

export async function getSales(){
    const sales=Sales.find().exec()
    return sales;
}

export async function getSales(salesId){
    const sales=Sales.findById(salesId).exec()
    return sales
}

export async function newSales(companyId,offerId,passenger_name,passenger_mobile){
    const sales=new Sales({"companyId":companyId,"offerId":offerId,"passenger_name":passenger_name,"passenger_mobile":passenger_mobile})
    await sales.save()
}

export async function updateSales(salesId,passenger_name,passenger_mobile){
    const sales=new Sales({"companyId":companyId,"offerId":offerId,"passenger_name":passenger_name,"passenger_mobile":passenger_mobile})
    await sales.save()
}