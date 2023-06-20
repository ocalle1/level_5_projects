const express = require('express'); // name of installed package that is already in the node_modules folder
const app = express(); // express() is given to us as a function so when app is called all parts for it to be a server will be called

//Middleware(for every request)//
app.use(express.json());

//Routes   
//middleware - code that runs before the final route call back
app.use("/bounty", require("./routes/bountyRouter.js"))

//We want the server to always be listening 1.port 2.CB
app.listen(9100, () => {
    console.log("the server is running on Port 9100")
})