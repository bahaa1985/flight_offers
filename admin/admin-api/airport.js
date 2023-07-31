
async function get_airports(connection){ //get all airports
    connection.collection("airport").find()
}

async function insert_airport(connection){   //insert new airport
    connection.collection("airports").insertOne({name:'Sohag',code:'HMB'})    
}

async function update_airport(connection,airportId){ //update an airport
    
}
export default insert_airport