const express = require("express");
const addCustomProperty = require("./routes/seperate");
const app = express();


// Register the middleware globally
app.use(addCustomProperty);
//Route handler
app.get('/', (request, response) => {
    //access the customProperty added by the middleware
    response.send(request.customProperty)
})

app.listen(6000, () => {});