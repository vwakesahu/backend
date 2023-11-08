import { app } from "./app.js";
import connectDb from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

connectDb()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is listening on port ${process.env.PORT || 8000}`);
    });
  })
  .catch((error) => {
    console.error("Mongo DB connection failed", error);
  });

//Effi Method
/*
 import express from 'express'

 const app = express();



 ;( async () ={
    try{

        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Error: ", error);
            throw error
        })
        app.listen(process.env.PORT, () => {
            console.log(`Server is listening on port ${process.env.PORT}`)
        })

    } catch(error){
        console.log("Error: ", error);
        throw error
    } 
 })( ) */
