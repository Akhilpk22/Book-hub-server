//loads .env file content into process .env default
require('dotenv').config()
const express = require('express')
const cors = require('cors')

// server creations using express  this bfserver applications to resovle front end request 
const bfServer = express()


// to use the cors in server use data share data type json 
bfServer.use(cors())
// data pass to js type   
bfServer.use(express.json())
// changing port number creation define
const PORT = 4000 || process.env.PORT


// to display on terminal
bfServer.listen(PORT, () => {
    console.log(`book hub serevr start at port: ${PORT} waiting for the client  request !!!`);
})



// to get output in browsere to display  only  use get method not allow  anther methods  
// this is http get method http://localhost:4000/ this url 
bfServer.get('/', (req, res) => {
    res.send(`<h1>book serevr is started and waiting for the client request!!!!!</h1>`)
})

// to post method 
// bfServer.post('/',(req,res)=>{
//     res.send("request to post method")
// })

// to put method 
// bfServer.put('/',(req,res)=>{
//     res.send("request to put method")
// })


// avoid recombailation to import nodemon package
// npm i -g nodemon
