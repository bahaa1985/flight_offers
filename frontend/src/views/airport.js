/* eslint-disable react-hooks/exhaustive-deps */
import { React } from 'react'
import { useState, useEffect } from 'react'
import { getAirports } from '../fetching/airport'
import { updateAirport } from '../fetching/airport'
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
    
    // const handleClose=()=>setShow(false)
    // const handleShow = () => setShow(true);

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
                                            onClick={()=>[setName(airport.name),setCode(airport.code),setId(airport._id)]}
                                            data-bs-toggle='modal' data-bs-target='#myModal'
                                        >
                                            تعديل
                                        </button>
                                    </td>
                                    <td>
                                        <button type='button' className='btn btn-danger'>
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
                    {/* {
                        document.getElementById('#myModal').hidden ? setNewForm(false) : setNewForm(true)
                    } */}
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
                                    onSubmit={
                                       !newForm? ()=>updateAirport(name,code,id):null
                                    } dir='rtl'
                                >
                                    <div className='m-2'>
                                        <input type='text' className='form-control mb-3' defaultValue={newForm ? '' :name} onChange={(e)=>setName(e.target.value)}/>
                                        <input type='text' className='form-control mb-3' defaultValue={newForm ? '' :code} onChange={(e)=>setCode(e.target.value)}/>
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

           {/* <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>تعديل مطار</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={()=>updateAirport(name,code,id)} dir='rtl'>
                        <Form.Group className='mb-3'>
                            <Form.Control className='mb-3' type='text' defaultValue={name} onChange={(e)=>setName(e.target.value)} >
                            </Form.Control>
                            <Form.Control type='text' defaultValue={code} onChange={(e)=>setCode(e.target.value)} >
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Button className='ml-2' type='submit' variant='primary'>تأكيد</Button>   
                            <Button variant='secondary' onClick={()=>handleClose()}>الغاء</Button>
                        </Form.Group>                                          
                    </Form>
                </Modal.Body>
                <Modal.Footer dir='rtl'>
                   
                </Modal.Footer>
           </Modal> */}
            <div>{id}</div>
        </div>
    )
}