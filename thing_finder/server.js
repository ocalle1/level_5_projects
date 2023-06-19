const express = require("express");
const app = express();
app.use(express.json()); // for parsing application/json --- creates object from JSON string



//middleware - code that runs before the final route call back.
app.use("/inventoryItems", require("./routes/inventoryItemRouter"))



// PORT --- 1: PORT 2 callBack function
app.listen(8000, () => {
    console.log("The Server is running on Port 8000")
})




// 1. Your GET endpoint should be able to check for any query parameters that may have been passed into the url of the request and filter the results based on those query parameters.
//2. However, a GET request to http://localhost:8000/fruit?type=banana should filter out any fruits in the array that don't have a type of banana and return an array to me (in Postman, Angular, or whatever front end I'm using) with only the objects with a type of banana.
