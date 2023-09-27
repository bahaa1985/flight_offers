export const username_isvalid=(username,error_label)=>{
    if(username.length<2|| username.length>50){
        error_label.current.innerText='الاسم يجب أن لا يقل عن حرفين  و لا يزيد عن 50 حرف'
        return false
    }
    error_label.current.innerText=''
    return true
}

export const email_isvalid=(email)=>{
    const email_pattern=/^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/gm   
    if(email_pattern.test(email)){
        return true
    }
    return false
}
