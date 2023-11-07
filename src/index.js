import mongoose from 'mongoose'
import { DB_NAME } from './constants'



 //Effi Method
 import express from 'express'

 const app = express()
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
 })( )