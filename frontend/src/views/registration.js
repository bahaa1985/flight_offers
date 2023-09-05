import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap-icons/font/bootstrap-icons.css"

export default function Registration(){

    const [formStatus,setFormState]=useState('')

    return(
        <div className="container">
            <h1>تسجيل مستخدم جديد</h1>
            <button type="submit" className="btn btn-primary"
                    data-bs-toggle='modal' data-bs-target='#myModal'>
                مستخدم جديد<i className="bi bi-plus-lg"></i>
            </button>
            <table className='table table-hover'>
                <thead>
                    
                </thead>
                <tbody>

                </tbody>
            </table>

            <div className="modal fade"  id='myModal'>
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
                        <form className="form" dir="rtl">
                            <input type="text" className="form-control mb-2" placeholder="اسم المستخدم"/>
                            <input type="email" className="form-control mb-2" placeholder="الايميل"/>
                            <input type="password" className="form-control mb-2" placeholder="الباسوورد"/>
                            <input type="password" className="form-control mb-2" placeholder="تأكيد الباسوورد"/>
                            <button type="submit" className="btn btn-primary">تسجيل</button>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    )
}