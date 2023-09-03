export async function getAirports(){   
    const response=await fetch('/airports', { method: "GET" })
    return response.json()
}

export async function updateAirport(name,code,id){
    
    const body_data={
        "name":name,
        "code":code
    }

    await fetch('/airports/'+id, 
    { 
    method: "PATCH" ,
    headers:{      
        "Content-Type":"application/json",
        "Accept": "*/*"
    },      
    body:JSON.stringify(body_data)})

}

export async function newAirport(name,code){
    
    const body_data={
        "name":name,
        "code":code
    }
    
    const response= await fetch('/airports/new', 
    { 
    method: "POST" ,
    headers:{      
        "Content-Type":"application/json",
        "Accept": "*/*"
    },      
    body:JSON.stringify(body_data)})

}