/* eslint-disable react-hooks/exhaustive-deps */
import { React } from 'react'
import { useState, useEffect } from 'react'
import { getAirports } from '../fetching/airport'
import { updateAirport } from '../fetching/airport'
import Table from 'react-bootstrap/Table'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {PlusLg} from "bootstrap-icons/icons"
import "bootstrap/dist/css/bootstrap.min.css"

export default function Airport() {

    const [airports, setAirports] = useState([])
    const [id,setId]=useState('')
    const [name, setName] = useState('')
    const [code, setCode] = useState('')    
    const [show,setShow]=useState(false)

    useEffect(() => {
        getAirports().then((data)=>{
            setAirports(data)
        })
              
    }, []);
    
    const handleClose=()=>setShow(false)
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button className='info'>مطار جديد</Button>
            
            <PlusLg/>
            
            <br/>
            <Table striped bordered hover responsive size="sm" variant='light' dir='rtl'>
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
                                        <Button variant='success' onClick={()=>[handleShow(),setName(airport.name),setCode(airport.code),setId(airport._id)]}>
                                            تعديل
                                        </Button>
                                    </td>
                                    <td>
                                        <Button variant='danger'>
                                            حذف
                                        </Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>

           <Modal 
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}                
            >
                <Modal.Header closeButton>
                    <Modal.Title>تعديل مطار</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={()=>updateAirport(name,code,id)} dir='rtl'>
                        <Form.Group >
                            <Form.Control className='mb-3' type='text' defaultValue={name} onChange={(e)=>setName(e.target.value)} >
                            </Form.Control>
                            <Form.Control type='text' defaultValue={code} onChange={(e)=>setCode(e.target.value)} >
                            </Form.Control>
                        </Form.Group>                                          
                    </Form>
                </Modal.Body>
                <Modal.Footer dir='rtl'>
                    <Button type='submit' variant='primary'>تأكيد</Button>   
                    <Button variant='secondary' onClick={()=>handleClose()}>الغاء</Button>
                </Modal.Footer>
           </Modal>
            <div>{id}</div>
        </div>
    )
}