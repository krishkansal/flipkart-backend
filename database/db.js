import mongoose from 'mongoose';


export const Connection=async(username,password)=>{
    
    try{
        await mongoose.connect("mongodb://localhost:27017/flipkart")
        console.log("connection successfully");

    }catch(error){
        console.log(error);
    }
}

export default Connection;