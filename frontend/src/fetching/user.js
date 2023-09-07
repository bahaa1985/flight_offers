export async function getUsers(){
    const response= await fetch('/users',{ method:'GET' })
    return response.json()
}

export async function getUser(userId){
    const response= await fetch('/users/'+userId,{ method : 'GET'})
    return response.json()
}

export async function updateUser(userId,name,email,mobile,user_type){
    const body_data={
        "name":name,      
        "email":email,
        "mobile":mobile,       
        "user_type":user_type
    }
    await fetch('/update/'+userId, 
        { 
            method : 'PATCH',
            headers: {
                'Content-Type':'application/json',
                'Accept':'*/*'
            },
            body: JSON.stringify(body_data)
        }
        )
}

export async function newUser(name,username,email,mobile,password,user_type){
    const body_data={
        "name":name,
        "username":username,
        "email":email,
        "mobile":mobile,
        "password":password,
        "user_type":user_type
    }

    await fetch('/users/new',
        {
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
                'Accept': '*/*'
            },
            body: JSON.stringify(body_data)
        }
    )
}