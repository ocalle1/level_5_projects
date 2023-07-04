const express = require('express'); // name of installed package that is already in the node_modules folder
const app = express(); // express() is given to us as a function so when app is called all parts for it to be a server will be called
const morgan = require('morgan') // HTTP request logger middleware for Node.js, log HTTP requests made to server, track and log incoming request - request methods, URL, status code, response time, etc...
const mongoose = require('mongoose')

//Middleware(for every request)// used to handle/modify requests before reaching final request handler; 
app.use(express.json());//parse(JSON to JS object) incoming request into request.body; 
app.use(morgan('dev'));//logs HTTP request of each request to console; logs for Express -- request method, URL, response status, response time, etc...; pays attn to requests and responses

mongoose.connect('mongodb://127.0.0.1:27017/test'); //Connects between Node.js and MongoDB database

const Monkey = mongoose.model('Monkey', { name: String });

const monkies = new Monkey({ name: 'Zelda' });
monkies.save().then(() => console.log('oooohahhahooo'));


//Routes   
//middleware - code that runs before the final route call back
app.use("/bounty", require("./routes/bountyRouter.js"));

//We want the server to always be listening 1.port 2.CB
app.listen(9900, () => {
    console.log("the server is running on Port 9300")
});