import React, { Fragment, useEffect, useState } from "react";
import { getUsers , newUser, updateUser } from "../fetching/user";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap-icons/font/bootstrap-icons.css"

export default function User(){

    const [users,setUsers]=useState([])
    const [formState,setFormState]=useState('')
    const [userId,setuserId]=useState('')
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [mobile,setMobile]=useState('')   
    const [password,setPass]=useState('')
    const [userType,setUsertype] =useState('')
    
    useEffect(()=>{
        getUsers().then((data)=>{
            setUsers(data)           
        })
    },[])

    console.log('users',users)
    
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
            <div className='modal fade' id='myRegModal' dir="rtl">
                <div className="modal-dialog">
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <button className='btn-close' data-bs-dismiss='modal'></button>
                            <h4 className='modal-title'>
                                {
                                    formState === 'new' ? 'مستخدم جديد' :
                                        formState === 'update' ? 'تعديل مستخدم' :
                                            formState === 'delete' ? 'حذف مستخدم' : null
                                }
                            </h4>
                        </div>
                        <div className='modal-body'>
                            <form   className="form"                           
                                    method="POST"
                                    // action="/users/new"
                                    onSubmit={(e)=>
                                    [e.preventDefault(),formState === 'new' ? newUser(name,email,mobile,password,userType) :
                                    formState === 'update' ? 
                                    updateUser (userId,name,email,mobile,userType)
                                    .then((data)=>data)
                                    : null]}
                            >
                                {
                                    formState ==='update' ?  <label className="form-label" htmlFor="user_input">اسم المستخدم</label> : null
                                }
                                <input  type="text" name="user_input" className="form-control mb-2" placeholder="اسم المستخدم" value={name} onChange={(e)=>setName(e.target.value)}/>                            
                                {
                                    formState ==='update' ?   <label className="form-label" htmlFor="email_input">الايميل</label> : null
                                }
                                <input  type="email" name="user_email" className="form-control mb-2" placeholder="الايميل" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                {
                                    formState  ==='update' ?   <label className="form-label" htmlFor="mobile_input">الموبايل</label> :null
                                }
                                <input  type="text" className="form-control mb-2" maxLength={11} minLength={11} placeholder="الموبايل" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
                                {
                                    formState==='new' ?                                        
                                        <Fragment>                                           
                                            <input type="password" className="form-control mb-2" placeholder="الباسوورد" onChange={(e)=>setPass(e.target.value)}/>
                                            <input type="password" className="form-control mb-2" placeholder="تأكيد الباسوورد" onChange={(e)=>e.target.value}/>
                                        </Fragment>
                                    :null
                                }
                               
                                <label className="form-label" htmlFor="select_input">نوع المستخدم</label>
                                <select name="select_input" className="form-control mb-2" onChange={(e)=>setUsertype(e.target.value)} value={userType}>
                                    <option value="ادمن">ادمن</option>
                                    <option value="وكيل">وكيل</option>
                                    <option value="شركة">شركة</option>
                                </select>

                                <button type="submit" className="btn btn-primary">تسجيل</button> 

                            </form>
                        </div>
                    </div>
                </div>               
            </div>            
        </div>
    )
}