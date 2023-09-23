import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap-icons/font/bootstrap-icons.css"



function Form(){

    return(
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
                            <form   className="needs-validation" noValidate
                                    method='POST'                                 
                                    >
                                <div className="form-group mt-2 position-relative">
                                    {
                                        formState ==='update' ?  <label className="form-label" htmlFor="user_input">اسم المستخدم</label> : null
                                    }
                                    <input  type="text" name="user_input" className="form-control mb-2" minLength={3} maxLength={25} placeholder="اسم المستخدم" value={name} onChange={(e)=>setName(e.target.value)} required/>                            
                                    <div className="invalid-tooltip">اسم المستخدم يجب ان يكون من 3 لـ 25 حرف</div>
                                </div>
                                <div className="form-group mt-2">
                                    {
                                        formState ==='update' ?   <label className="form-label" htmlFor="email_input">الايميل</label> : null
                                    }
                                    <input  type="email" name="user_email" className="form-control mb-2" placeholder="الايميل" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                                    <label className="invalid-feedback">تأكد من الايميل</label>
                                </div>                                
                                <div className="input-group mt-2">
                                    {
                                        formState  ==='update' ?   <label className="form-label" htmlFor="mobile_input">الموبايل</label> :null
                                    }
                                    <input  type="mobile" className="form-control mb-2" maxLength={11} minLength={11} placeholder="الموبايل" value={mobile} onChange={(e)=>setMobile(e.target.value)} required/>
                                    <label className="invalid-feedback">تاكد من رقم الموبايل</label>
                                </div>
                                <div className="input-group mt-2  has-validation">
                                    {
                                        formState==='new' ?                                        
                                            <Fragment>                                           
                                                <input type="password" className="form-control mb-2" placeholder="الباسوورد" minLength={6} onChange={(e)=>setPass(e.target.value)} required/>
                                                <input type="password" className="form-control mb-2" placeholder="تأكيد الباسوورد" minLength={6} onChange={(e)=>e.target.value} required/>
                                            </Fragment>
                                        :null
                                    }
                                </div>
                                <div className="input-group mt-2">
                                    <select name="select_input" className="form-select mb-2" onChange={(e)=>setUsertype(e.target.value)} required>نوع المستخدم
                                        <option>اختر نوع المستخدم</option>
                                        <option value="ادمن">ادمن</option>
                                        <option value="وكيل">وكيل</option>
                                        <option value="شركة">شركة</option>
                                    </select>
                                </div>

                                <button id='submitBut' type="submit" className="btn btn-primary">تسجيل</button> 

                            </form>
                        </div>
                    </div>
                </div>               
            </div>  
    )
}