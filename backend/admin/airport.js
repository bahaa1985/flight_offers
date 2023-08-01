import * as models from '../api/models.js'
export async function getAirports(){ //get all airports
    const airports=await models.airport.find().exec()
    return airports
    // connection.collection("airport").find()
}

export async function insert_airport(){   //insert new airport
    // connection.collection("airports").insertOne({name:'Sohag',code:'HMB'})    
}

export async function update_airport(airportId){ //update an airport
    
}
