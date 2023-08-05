
import Agency from "../models/agency";

export async function getAgencies (){
    const agencies =Agency.find().exec()
    return agencies
}

export async function getAgency(agencyId){
    const agency=await Agency.findById(agencyId).exec()
    return agency
}

export async function newAgency(name,username,email,mobile,password){
    const agency=new Agency({"name":name,"username":username,"email":email,
        "password":password,"mobile":mobile})
    await agency.save()
}

export async function updateAgency(agencyId,name,username,email,mobile,password,suspend){
    const agency=Agency.findByIdAndUpdate(agencyId,{"name":name,"username":username,"email":email,
    "password":password,"mobile":mobile,"suspend":suspend}).exec();
}