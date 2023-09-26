export const username_isvalid=(username)=>{
    if(username.length>1){
        return true
    }
    return false
}

export const email_isvalid=(email)=>{
    const email_pattern=/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm   
    if(email_pattern.test(email)){
        return true
    }
    return false
}