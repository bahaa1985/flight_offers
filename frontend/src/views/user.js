import React, { Fragment, useEffect, useState } from "react";
import { getUsers , newUser, updateUser } from "../fetching/user";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap-icons/font/bootstrap-icons.css"
import { Modal } from "bootstrap/dist/js/bootstrap.bundle";

export default function User(){

    const [users,setUsers]=useState([])
    const [formState,setFormState]=useState('')
    const [modalHidden,setModalHidden]=useState(true)
    const [userId,setuserId]=useState('')
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [mobile,setMobile]=useState('')   
    const [password,setPass]=useState('')
    const [userType,setUsertype] =useState('')
    const [disableBut,setDisableBut]=useState(true)
    
    useEffect(()=>{
        getUsers().then((data)=>{
            setUsers(data)           
        })
    },[])
   

    // function handleSubmit(){
    //     // console.log('event: ',event)
    //     const myForm=document.getElementsByClassName('.needs-validation')[0]
    //     myForm.addEventListener('submit',(event)=>{
    //         // event.preventDefault();
    //         // event.stopPropagation();
    //         if(myForm.checkValidity()){            
    //             console.log('valid!')
    //             if(formState==='new'){
    //                 newUser(name,email,mobile,password,userType).then((data)=>{
    //                     if(data){
    //                         setName('');setEmail('');setMobile('');setPass('');setUsertype('')                   
    //                     }
                    
    //                 })
    //             }
    //             else if(formState==='update'){
    //                 updateUser(userId,name,email,mobile,userType).then((data)=>{
    //                     if(data){
    //                     setName('');setEmail('');setMobile('');setPass('');setUsertype('')
    //                     getUsers().then((data)=>{
    //                         setUsers(data)           
    //                     })
    //                     }
                    
    //                 })
    //             }
    //         }
    //         else{
    //             event.preventDefault();
    //             event.stopPropagation();
    //             console.log('not valid!')
    //         }
    //     })
        
    // }
    
    
    
    return(
        <div className="container" dir="rtl">
            <h1>تسجيل مستخدم جديد</h1>
            <button type="button" 
                    className="btn btn-primary"
                    data-bs-toggle='modal' data-bs-target='#myRegModal' 
                    onClick={()=>[setFormState('new'),setName(''),setEmail(''),setMobile('')]}>
                مستخدم جديد<i className="bi bi-plus-lg"></i>
            </button>
            
            <table id="usersTable" className='table table-hover' >
                <thead>
                    
                </thead>
                <tbody>
                    {
                        users.map((user,index)=>{
                            return(
                            <tr key={index}>
                                <td>{user.name}</td>                             
                                <td>{user.email}</td>
                                <td>{user.mobile}</td>
                                <td>{user.user_type}</td>                                                             
                                <td>
                                    <button type='submit' className='btn btn-success'
                                        onClick={() => [setFormState('update'), 
                                        setName(user.name), setEmail(user.email),
                                        setMobile(user.mobile),setUsertype(user.user_type),setuserId(user._id)]}
                                        data-bs-toggle='modal' data-bs-target='#myRegModal'
                                    >
                                        تعديل
                                    </button>
                                </td>
                                <td>
                                    <button type='button' className='btn btn-danger'
                                            onClick={() => [setFormState('delete'), setName(user.name), setuserId(user._id)]}
                                            data-bs-toggle='modal' data-bs-target='#myRegModal'>
                                        حذف
                                    </button>
                                </td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>

            {/* bootstrap form within modal shown only when click new,update,delete buttons */}
                      
        </div>
    )
}