const express = require('express');
const inventoryRouter = express.Router();


const Inventory = require('../models/inventory.js');



//GET
inventoryRouter.get("/", (request, response, next) => {
    Inventory.find()
    .exec()
    .then(inventories => {
        response.status(200).send(inventories)
    })
    .catch(error => {
        response.status(500)
        return next(error)
    })
});
// POST 
inventoryRouter.post("/", (request, response, next) => {
    const newInventory = new Inventory(request.body)
    newInventory
    .save()
    .then(savedInventory => {
        return response.status(200).send(savedInventory)
    })
    .catch(error => {
        response.status(500)
        return next(error)
    })
    
});

// GET one
inventoryRouter.get('/:inventoryid', (request, response, next) =>{
     Inventory.findOne({_id: request.params.inventoryid})
    .exec()
    .then(findInventories => {
if(!findInventories) {
    return response.status(404).send("Item not found")
}        
return response.status(200).send(`Successfully found item ${findInventories.item} from the database`)
    })
})

inventoryRouter.get("/search/item", (request, response, next) => {
    Inventory.find({item:request.query.item})
    .exec()
    .then(inventories => {
        return response.status(200).send(inventories)
    })
    .catch(error => {
        response.status(500)
        return next(error)
    })
});





module.exports = inventoryRouter;