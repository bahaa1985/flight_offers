import React, { useEffect, useState } from "react";
import { getUsers , newUser } from "../fetching/user";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap-icons/font/bootstrap-icons.css"

export default function Registration(){

    const [formStatus,setFormState]=useState('')
    const [users,setUsers]=useState([])
    
    useEffect(()=>{
        getUsers().then((data)=>{
            setUsers(data)
        })
    },[])

    return(
        <div className="container">
            <h1>تسجيل مستخدم جديد</h1>
            <button type="button" 
                    className="btn btn-primary"
                    data-bs-toggle='modal' data-bs-target='#myModal' 
                    onClick={()=>setFormState('new')}>
                مستخدم جديد<i className="bi bi-plus-lg"></i>
            </button>
            
            <table className='table table-hover'>
                <thead>
                    
                </thead>
                <tbody>
                    {
                        users.map((index,user)=>{
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.mobile}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>

            {/* bootstrap form within modal shown only when click new,update,delete buttons */}
            <div className='modal fade' id='myModal' dir="rtl">
                <div className="modal-dialog">
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <button className='btn-close' data-bs-dismiss='modal'></button>
                            <h4 className='modal-title'>
                                {
                                    formStatus === 'new' ? 'مستخدم جديد' :
                                        formStatus === 'update' ? 'تعديل مستخدم' :
                                            formStatus === 'delete' ? 'حذف مستخدم' : null
                                }
                            </h4>
                        </div>
                        <div className='modal-body'>
                            <form className="form" >
                                <input type="text" className="form-control mb-2" placeholder="اسم المستخدم"/>
                                <input type="email" className="form-control mb-2" placeholder="الايميل"/>
                                <input type="password" className="form-control mb-2" placeholder="الباسوورد"/>
                                <input type="password" className="form-control mb-2" placeholder="تأكيد الباسوورد"/>
                                <select className="form-control">
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