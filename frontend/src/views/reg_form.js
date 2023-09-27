import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
export default function RegForm() {

    const [username,setUsername]=useState('')
    const [username_validity,setUsername_validity]=useState(false)
    const [Email_validity,setEmail_validity]=useState(false)
    const [email,setEmail]=useState('')
    const [username_error_ref,email_error_ref]=useRef()

    function check_username(){
        if(username.length<2|| username.length>50){
            username_error_ref.current.innerText='الاسم يجب أن لا يقل عن حرفين  و لا يزيد عن 50 حرف'
            return false
        }
        username_error_ref.current.innerText=''
        return true
    }

    function check_email() {
        const email_pattern=/^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/gm   
        if(!email_pattern.test(email)){
            email_error_ref.current.innerText='تأكد من الايميل'
            return false
        }
        email_error_ref.current.innerText=''
        return true
    }

    function handleSubmit(e){
        if(!check_username || !check_email){
            e.preventDefault()
        }
    }
    return (
        <div className="container">
            <form id="regForm" onSubmit={(e)=>handleSubmit(e)} className="form" noValidate>
                <div className="form-group">
                    <input type="text" placeholder="اسم المستخدم"  value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <label ref={username_error_ref} className="invalid-feedback"></label>
                </div>
                <div className="form-group">
                    <input type="email" placeholder="الايميل" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <label ref={email_error_ref} className="invalid-feedback"></label>
                </div>
                <div>
                    <button  type="submit" formTarget="#regForm" className=" btn btn-primary form-btn">تسجيل</button>
                </div>
            </form>
        </div>
    )
}