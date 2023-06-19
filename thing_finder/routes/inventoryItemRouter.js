const express = require("express");// gets info from node_module
const inventoryItemRouter = express.Router(); // Router helps to modularize the code into separate sections for specific noun --- .get .pust .post .delete
const uuid = require("uuid").v4; // Gives you random item for item in array



// ARRAY of items
const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
        _id: uuid()
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
        _id: uuid()
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
        _id: uuid()
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
        _id: uuid()
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
        _id: uuid()
    },{
        name: "soup",
        type: "food",
        price: 300,
        _id: uuid()
    },{
        name: "flour",
        type: "food",
        price: 100,
        _id: uuid()
    }
];

//gets all
//1.
inventoryItemRouter.get("/", (request, response) => {
// console.log(inventoryItems)
response.send(inventoryItems)// sends items to postman to display
})

//2. get by type
inventoryItemRouter.get("/search/type", (request, response) => {
//   console.log(request) //--- displays what you need to include to get info --- request.query.genre
    const type = request.query.type
    const filteredItems = inventoryItems.filter(food => food.type === type)
    response.send(filteredItems)
})


// inventoryItemRouter.get("/:fruitId", (request, response) => {
//     // console.log(request.params.movieId)
//     const fruitId = request.params.fruitId
//     const foundfruit = inventoryItems.find(fruit => fruit._id === fruitId)
//     response.send(foundfruit)
// })




module.exports = inventoryItemRouter;