// define the connections to db in mongoose 
const mongoose= require('mongoose')
// inport ther databes 
const connectionsString= process.env.DATABASE
// to call ther mongoose in connection 
mongoose.connect(connectionsString).then(()=>{
    console.log("mongodb Atles connected successfully with  BH");
}).catch((err)=>{
    console.log(`mongodb connection with faild ${err}`);
})