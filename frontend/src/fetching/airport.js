export async function getAirports(){   
    const response=await fetch('/airports', { method: "GET" })
    return response.json()
}

export async function newAirport(name,code){
    
    const body_data={
        "name":name,
        "code":code
    }
    
    await fetch('/airports/new', 
    { 
    method: "POST" ,
    headers:{      
        "Content-Type":"application/json",
        "Accept": "*/*"
    },      
    body:JSON.stringify(body_data)})

}

export async function updateAirport(name,code,id){
    
    const body_data={
        "name":name,
        "code":code
    }

    await fetch('/airports/update/'+id, 
    { 
    method: "PATCH" ,
    headers:{      
        "Content-Type":"application/json",
        "Accept": "*/*"
    },      
    body:JSON.stringify(body_data)})

}

export async function suspendAirport(id,suspend){
    
    const body_data={       
        "suspend":suspend
    }

    await fetch('/airports/suspend/'+id, 
    { 
    method: "PATCH" ,
    headers:{      
        "Content-Type":"application/json",
        "Accept": "*/*"
    },      
    body:JSON.stringify(body_data)})

}

