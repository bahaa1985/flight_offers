import {React} from 'react'
import { useState,useEffect } from 'react'

export default function Airport (){

    const [airports,setAirports]=useState([])

    useEffect(()=>{
        async function fetchAirports(){
            try {
                await fetch('/airports', { method: "GET" })
                .then((result)=>{
                    console.log(result)
                })
        }
        catch{

        }}
            
       fetchAirports();
        // .then((result) => {
        //     console.log(result.json());
        //     // setAirports(result)
        // })
        // .catch((err) => {
        //     throw err})
        },[]);

        return(
            <div>
                <ul>
                    {
                        airports.map((airport,index)=>{
                            return(
                                <li>{airport.name}</li>            
                            )
                        })
                    }
                </ul>                
            </div>
        )
}