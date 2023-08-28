/* eslint-disable react-hooks/exhaustive-deps */
import {React} from 'react'
import { useState,useEffect } from 'react'

export default function Airport (){

    const [airports,setAirports]=useState([])

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
                <ul>
                    {
                        airports.map((airport,index)=>{
                            return(
                                <li key="index">{airport.name}</li>            
                            )
                        })
                    }
                </ul>                
            </div>
        )
}