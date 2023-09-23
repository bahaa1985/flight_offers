export const username_isvalid=(username)=>{
    if(username.length>1 && username.length<51){
        return true
    }
    return false
}

export const email_isvalid=(email)=>{
    const email_regex=/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm   
    if( email.match(email_regex).length>0){
        return true
    }
    return false
}