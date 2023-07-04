const express = require('express'); 
const bountyRouter = express.Router();



const Bounty = require('../models/bounty.js');


// GET
bountyRouter.get("/", (request, response, next) => {
    Bounty.find()
    .then(bounties => {
        response.status(200).send(bounties)
    })
    .catch(error => {
        response.status(500)
        return next(error)
    })
})
//POST
bountyRouter.post("/", (request, response) => {
  const newBounty = new Bounty(request.body)
  newBounty
  .save()
  .then(savedBounty => {
    return response.status(200).send(savedBounty)
  })
  .catch(error => {
    response.status(500)
    return next(error)
  })
})
//PUT
bountyRouter.put("/:bountyId", (request, response, next) => {
    Bounty.findOneAndUpdate(
        {_id: request.params.bountyId},
        request.body,
        {new:true}
    )
    .exec()
    .then(updatedBounty => {
        if(!updatedBounty){
            return response.status(404).send("Bounty not found")
        }
        return response.status(200).send(updatedBounty)
    })
    .catch(error => {
        response.status(500)
        return next(error)
    })
});
//DELETE
bountyRouter.delete("/:bountyId", (request, response, next) => {
  Bounty.findOneAndDelete({_id: request.params.bountyId})
  .exec()
  .then(deletedBounty => {
    if (!deletedBounty) {
        return response.status(404).send("Bounty not found")
    }
    return response.status(288).send(`Successfully deleted the bounty ${deletedBounty.title} from the database`)
  })
  .catch(error => {
    response.status(500)
    return next(error)
  })
})



module.exports = bountyRouter; 