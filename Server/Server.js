const express = require('express');
const mongoose = require('mongooose');
const app = express();

const uri = "mongodb+srv://divyanshdh:mybackend@123@backend.sa7gow1.mongodb.net/?retryWrites=true&w=majority"

async function connect() {
    try{
        await mongoose.connect(uri);
        console.log("Connect to mongoDB")
    }
    catch(error){
        console.error(error);
    }
}

connect();

app.listen(8000, () => {
    console.log("Server started on port 8000")
})