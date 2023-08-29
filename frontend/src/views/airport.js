/* eslint-disable react-hooks/exhaustive-deps */
import {React} from 'react'
import { useState,useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

export default function Airport (){

    const [airports,setAirports]=useState([])
    const [name,setName]=useState('')
    const [code,setCode]=useState('')
    
    useEffect(()=>{
            fetch('/airports', { method: "GET" })
            .then((result)=>{
                   result.json().then((data)=>{
                        setAirports(data)
                    })
                }
            )
                 
           }
    ,[]);

        return(
            <div>
                <Table striped bordered hover size="sm" variant='light' responsive dir='rtl'
                data-id='id'
                  >
                    <tbody>
                    {
                        airports.map((airport,index)=>{
                            return(
                                <tr key={index}>
                                    <td onChange={()=>setName(airport.name)} contentEditable>                                    
                                        {airport.name}
                                    </td>
                                    <td onChange={()=>setCode(airport.code)} contentEditable>
                                       {airport.code}
                                    </td>
                                    <td>
                                        <Button variant='success' onClick={()=>console.log(name+ ' ---- ' + code)}>
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
                
            </div>
        )
}