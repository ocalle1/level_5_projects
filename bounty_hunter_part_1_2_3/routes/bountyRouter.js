const express = require('express'); //1
const bountyRouter = express.Router();//4
const uuid = require('uuid').v4;//3



//2
const bounty = [
    { firstName:"bubba", lastName: "sparks", living:"yes", amount: 10000, type: "Sith", _id: uuid() },
    { firstName:"susan", lastName: "gibbson", living: "yes", amount: 50000, type: "Jedi", _id: uuid() },
    { firstName:"mikayla", lastName: "johnson", living: "yes", amount: 20000, type: "Sith", _id: uuid() },
    { firstName:"john", lastName: "bob", living: "yes", amount: 70000, type: "Jedi", _id: uuid() }
]
//Route
//displays the bounty
bountyRouter.get("/", (request, response) => {
    response.send(bounty)
})//5
//Post(add new bounty)
bountyRouter.post("/", (request, response) => {
    const newBounty = request.body;
    newBounty._id = uuid()
    bounty.push(newBounty)
    response.send("Successfull upload")
})//6
//Delete
bountyRouter.delete("/:bountyId", (request, response) => {
    const bountyId = request.params.bountyId
    const bountyIndex = bounty.findIndex(bounties => bounties._id === bountyId)
   bounty.splice(bountyIndex, 1)
   response.send("Bounty removed")
})//7
//put/update
bountyRouter.put("/:bountyId", (request, response) => {
    const bountyId = request.params.bountyId
    const bountyIndex = bounty.findIndex(bounties => bounties._id === bountyId)
   const updateBounty = Object.assign(bounty[bountyIndex], request.body)
   response.send(updateBounty)

})

module.exports = bountyRouter; //4