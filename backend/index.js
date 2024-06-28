const express = require("express");

// const URI = "mongodb://127.0.0.1:27017/mymern";

// const connectDb = async () => {
//     try{
//         await mongoose.connect(URI);
//         console.log("Connected to database");
//     }catch(error){
//         console.error("database connection failed");
//         process.exit(0);
//     }
// }

//  module.exports = connectDb





const mongoose = require("mongoose");
const app = express()

mongoose.connect("mongodb://localhost:27017/mymern",{
    useNewUrlParser:true,useUnifiedTopology:true
},(err) => {
    if(err)
        {
            console.log(err)
        }else{
            console.log("Connected Successfully")
        }
})

app.listen(3000,()=>{
    console.log("On port 3000 !!")
})