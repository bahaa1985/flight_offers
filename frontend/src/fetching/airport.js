export async function getAirports(){   
    const response=await fetch('/airports', { method: "GET" })
    const result= response.json()
    return result
}

export async function updateAirport(name,code,id){
    const response= await fetch(`/airports/${id}`, 
    { 
    method: "PATCH" ,
    headers:{
        "Content-Type":"Application/json",
    },    
    body:JSON.stringify({"name":name,"code":code})})
    // console.log("response: ",response)
    const result= response.json()    
    return result
}