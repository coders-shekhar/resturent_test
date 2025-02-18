const express = require('express');
const app = express();
const db = require("./db");
const Person = require("./Models/Person");
require("dotenv").config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/', (req, res)=>{
    res.send("Welcome to Resturent, How we can help you ?");
})

app.get("/person", async(req, res)=>{
    try{
        const data = await Person.find();
        console.log("data fetched successfully!!!");
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : "Internal Server error"});
    }
})

app.post("/person", async(req,res)=>{
    try{
        const data = req.body;
        const newPerson = new Person(data);
        const resp = await newPerson.save();

        console.log("data saved successfully!!!");
        res.status(200).json(resp);


    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "Internal Sever Error"});
    }
})


const PORT=process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server is listening at port : ${PORT}`);
})