import * as models from '../api/models.js'
export async function getAirports(){ //get all airports
    const airports=await models.airport.find().exec()
    return airports
    // connection.collection("airport").find()
}

export async function insertAirport(name,code){   //insert new airport
   const new_airport=models.airport.create({"name":name,"code":code})
   return new_airport
}

export async function updateAirport(airportId){ //update an airport
    
}
