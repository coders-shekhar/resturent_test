const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017/resturent";

mongoose.connect(mongoURI);

const db = mongoose.connection;

db.on("connected", ()=>{
    console.log("Database Connection Successful!!!")
})
db.on("error", ()=>{
    console.log(error);
})
db.on("disconnected", ()=>{
    console.log("Database disconnected");
})

module.exports = db;