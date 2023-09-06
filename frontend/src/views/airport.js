/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { getAirports, updateAirport,newAirport, suspendAirport } from '../fetching/airport'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap-icons/font/bootstrap-icons.css"

export default function Airport() {

    const [airports, setAirports] = useState([])
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [code, setCode] = useState('')
    const [formStatus, setFormStatus] = useState('')

    useEffect(() => {
        getAirports().then((data) => {
            setAirports(data)
        })

    }, []);

    return (
        <div className='container' dir='rtl'>
            <button
                type='button'
                className='btn btn-primary m-3'
                onClick={() => [setFormStatus('new'), setName(''), setCode('')]}
                data-bs-toggle='modal' data-bs-target='#myModal'>
                مطار جديد<i className="bi bi-plus-lg"></i>
            </button>

            <table className='table table-hover'>
                <tbody>
                    {
                        airports.map((airport, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        {airport.name}
                                    </td>
                                    <td>
                                        {airport.code}
                                    </td>
                                    <td>
                                        <button type='button' className='btn btn-success'
                                            onClick={() => [setFormStatus('update'), setName(airport.name), setCode(airport.code), setId(airport._id)]}
                                            data-bs-toggle='modal' data-bs-target='#myModal'>
                                            تعديل
                                        </button>
                                    </td>
                                    <td>
                                        <button type='button' className='btn btn-danger'
                                             onClick={() => [setFormStatus('delete'), setName(airport.name), setId(airport._id)]}
                                            data-bs-toggle='modal' data-bs-target='#myModal'>
                                            حذف
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            {/* bootstrap form within modal shown only when click new,update,delete buttons */}
            <div className='modal fade' id='myModal' onSubmit={() => suspendAirport(id, true)}>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <button className='btn-close' data-bs-dismiss='modal'></button>
                            <h4 className='modal-title'>
                                {
                                    formStatus === 'new' ? 'مطار جديد' :
                                        formStatus === 'update' ? 'تعديل مطار' :
                                            formStatus === 'delete' ? 'حذف مطار' : null
                                }
                            </h4>
                        </div>
                        <div className='modal-body'>
                            <form className='form'
                                onSubmit={() => formStatus === 'new' ? newAirport(name, code) 
                                : formStatus === 'update' ? updateAirport(name, code, id) 
                                : formStatus === 'delete' ? suspendAirport(id, true) : null} dir='rtl'>
                                {
                                    formStatus === 'new' || formStatus === 'update' ?
                                        <div className='m-2'>
                                            <label htmlFor='airportName' className='form-label d-flex'>اسم المطار</label>
                                            <input id='airportName' type='text' className='form-control mb-3' value={name} onChange={(e) => setName(e.target.value)} />
                                            <label htmlFor='airportCode' className='form-label d-flex'>كود المطار</label>
                                            <input id='airportCode' type='text' className='form-control mb-3' value={code} onChange={(e) => setCode(e.target.value)} />
                                            <div className='m-3 d-flex justify-content-between'>
                                                <button type='submit' className='btn btn-primary col-2'>تأكيد</button>
                                                <button type='button' className='btn btn-secondary col-2' data-bs-dismiss='modal'>الغاء</button>
                                            </div>
                                        </div>
                                    :
                                        <div className='m-2'>
                                            <h4>هل أنت متأكد من حذف مطار  {name}؟</h4>
                                            <div className='m-3 d-flex justify-content-between'>
                                                <button type='submit' className='btn btn-danger col-2'>تأكيد</button>
                                                <button type='button' className='btn btn-secondary col-2' data-bs-dismiss='modal'>الغاء</button>
                                            </div>
                                        </div>
                                }

                            </form>
                        </div>                       
                    </div>
                </div>
            </div>
        </div>
    )
}