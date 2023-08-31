export async function getAirports(){   
    const response=await fetch('/airports', { method: "GET" })
    return response.json()
}

export async function updateAirport(name,code,id){
    
    await fetch('/airports/'+id, 
    { 
    method: "PATCH" ,
    headers:{      
        "Content-Type":"application/json",
    },      
    body:JSON.stringify({"name":name,"code":code})})
    console.log("response:",id)            
}