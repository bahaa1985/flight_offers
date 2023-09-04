/* eslint-disable react-hooks/exhaustive-deps */
import { React } from 'react'
import { useState, useEffect } from 'react'
import { getAirports } from '../fetching/airport'
import { updateAirport } from '../fetching/airport'
import { newAirport } from '../fetching/airport'
import { suspendAirport } from '../fetching/airport'
import Table from 'react-bootstrap/Table'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import  "bootstrap-icons/font/bootstrap-icons.css"

export default function Airport() {

    const [airports, setAirports] = useState([])
    const [id,setId]=useState('')
    const [name, setName] = useState('')
    const [code, setCode] = useState('')    
    const [newForm,setNewForm]=useState(false)

    useEffect(() => {
        getAirports().then((data)=>{
            setAirports(data)
        })
              
    }, []);


    return (
        <div className='container' dir='rtl'>
            <button className='btn btn-primary m-3' data-bs-toggle='modal' data-bs-target='#myModal' onClick={()=>setNewForm(true)}>مطار جديد<i className="bi bi-plus-lg"></i></button>                                   
           
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
                                            onClick={()=>[setName(airport.name),setCode(airport.code),setId(airport._id),setNewForm(false)]}
                                            data-bs-toggle='modal' data-bs-target='#myModal'
                                        >
                                            تعديل
                                        </button>
                                    </td>
                                    <td>
                                        <button type='button' className='btn btn-danger' onClick={()=>[setId(airport._id),suspendAirport(id,true)]}>
                                            حذف
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
           
           <div className='modal fade' id='myModal'>                    
                    <div className='modal-dialog'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                            <button className='btn-close' data-bs-dismiss='modal'></button>   
                                <h4 className='modal-title'>
                                    {
                                        newForm ? 'مطار جديد' : 'تعديل مطار'
                                    }
                                </h4>                                   
                            </div>
                            <div className='modal-body'>
                                <form className='form' 
                                    onSubmit={ ()=>newForm? newAirport(name,code) : updateAirport(name,code,id) } dir='rtl'>
                                    <div className='m-2'>
                                        <label for='airportName' className='form-label d-flex'>اسم المطار</label>
                                        <input id='airportName' type='text' className='form-control mb-3' defaultValue={newForm ? '' :name} onChange={(e)=>setName(e.target.value)}/>
                                        <label for='airportCode' className='form-label d-flex'>كود المطار</label>
                                        <input id='airportCode' type='text' className='form-control mb-3' defaultValue={newForm ? '' :code} onChange={(e)=>setCode(e.target.value)}/>
                                    </div>
                                    <div className='m-3 d-flex justify-content-between'>
                                        <button type='submit' className='btn btn-primary col-2 '>تأكيد</button>
                                        <button type='button' className='btn btn-danger col-2' data-bs-dismiss='modal'>الغاء</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
           </div>                      
        </div>
    )
}