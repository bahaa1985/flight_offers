import React, { Fragment, useEffect, useState } from "react";
import { getUsers , newUser, updateUser } from "../fetching/user";
import { username_isvalid,email_isvalid } from "./validation";
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
   

    function handleSubmit(e){
        // console.log('event: ',event)
        const myForm=document.getElementsByClassName('form')[0]        
        // myForm.addEventListener('submit',(event)=>{
            if(!username_isvalid(name) || !email_isvalid(email)){
                e.preventDefault();
                e.stopPropagation();
                myForm.classList.add('was-validated')
            }
            else{
                myForm.classList.remove('was-validated')
                if(formState==='new'){
                    newUser(name,email,mobile,password,userType).then((data)=>{
                        if(data){
                            setName('');setEmail('');setMobile('');setPass('');setUsertype('')                   
                        }                    
                    })
                }
                else if(formState==='update'){
                    updateUser(userId,name,email,mobile,userType).then((data)=>{
                        if(data){
                        setName('');setEmail('');setMobile('');setPass('');setUsertype('')
                        getUsers().then((data)=>{
                            setUsers(data)           
                        })
                        }
                    
                    })
                }
            }
          
        // })
        
    }
    
    
    
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
            <div className="modal fade" id="myRegModal">
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="#myRegModal"></button>
                    </div>
                    <div className="modal-body">
                        <form id="regForm" className="form" onSubmit={(e)=>handleSubmit(e)} noValidate>
                        <div className="form-group">
                            <input type="text" placeholder="اسم المستخدم" onChange={(e)=>setName(e.target.value)} required/>
                            <label className="invalid-feedback">اسم المستخدم يجب ألا يقل عن حرفين و ليس أكثر من 50 حرف</label>
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="اسم المستخدم" onChange={(e)=>setEmail(e.target.value)} required/>
                            <label className="invalid-feedback">تأكد من كتابة الايميل بشكل صحيح</label>
                        </div> 
                        <div>
                        <button type="submit" formTarget="#regForm" className=" btn btn-primary form-btn">تسجيل</button>
                            </div>                    
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                     
                  </div>
                </div>   
                </div>
                        
            </div>
                   
                      
        </div>
    )
}