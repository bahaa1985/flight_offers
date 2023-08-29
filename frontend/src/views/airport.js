/* eslint-disable react-hooks/exhaustive-deps */
import { React } from 'react'
import { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

export default function Airport() {

    const [airports, setAirports] = useState([])
    const [name, setName] = useState('')
    const [code, setCode] = useState('')

    useEffect(() => {
        fetch('/airports', { method: "GET" })
            .then((result) => {
                result.json().then((data) => {
                    setAirports(data)
                })
            }
            )

    }
        , []);
      
    return (
        <div>
            <Table striped bordered hover responsive size="sm" variant='light' dir='rtl'>
                <tbody>
                    {                       
                        airports.map((airport, index) => {
                            return (
                                <tr key={index}>
                                    <td  onChange={(e)=>console.log(e.target)} contentEditable>
                                        {airport.name}
                                    </td>
                                    <td>
                                        {airport.code}
                                    </td>
                                    <td>
                                        <Button variant='success'>
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
           
            <div>{name}</div>
        </div>
    )
}