import express from "express"

import {connectDB } from "./src/config/db.js"

import User from './src/models/user.js'

const app = express();

app.use(express.json());

let PORT = 9000 || process.env.port



app.post('/signup', async (req , res) =>{

  console.log("hi Janmejay")

  const userObj = {
    firstName : "Janmejay",
    lastName : "Singh",
    emailId : "techcity1199@gmail.com",
    password : "Tech@546"
  }
  

  // creating new Instance 
  const user = new User(userObj)
 
  try{
   const response =  await user.save()
   console.log("hi Jamejay ", response)

   res.status(201).json({message : "user Sucussecfully saved"})

  }catch(error){
    console.log("error ", error)
    res.status(400).json({error : error})

  }
 





})


connectDB()
  .then(() => {
    console.log("Hi Janmejay Singh");
    console.log("Mongoose connected successfully");

    app.listen(PORT, () =>{
  })
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });





