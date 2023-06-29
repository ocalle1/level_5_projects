import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Bounty from './Components/Bounty.js';
import AddBountyForm from './Components/AddBountyForm.js';






function App() {

  const [bounty, setBounty] = useState([]);

  //POST 
  //newBounty includes the data sent to my server 
  function addBounty(newBounty) {// addBounty is a prop of AddBountyForm.js <inputs/>,when there's a Change/submit the bounty is added to the list
    axios.post("/bounty", newBounty)// "/bounty" - endpoint where the newBounty(the data) as argument is sent.  
      .then(response => {
        setBounty(prevBounty => [...prevBounty, response.data])
        // The prevBounty is tied to the "/bouty" which has all the information.
        // The [ ] - is used to create a new array of existing elements and adds/create array of new one(response.data). 
        //the sprad operator (...) creates new array combining previous data with new data = adding/creating new data to existing array. 
      })
      .catch(error => console.log(error))
  }

  //GET
  function getBounty() {
    axios.get("/bounty")// returns a promise which is an object of an asynchronous operation = HTTP request
      .then(response => setBounty(response.data))// .then waits for promise from axios.get, the (response =>...) is the callback function that executes. 
      // response(is parameter) object calls setMovies()function with response.data as argument, updates movies
      .catch(error => console.log(error))
  }

  //PUT/update
  function editBounty(update, bountyId) {// 2 parameters - update - contains updated data, bountyId - identifier of specific bouty to be edited  
    axios.put(`/bounty/${bountyId}`, update)//`` - backtics allow to embed `${expression}` within a string. If the boutyId is found to equal to the id that is being edited then the id will display at the end of url
      .then(response => {
        setBounty(prevBounty => prevBounty.map(goOver => goOver._id !== bountyId ? goOver : response))
        // setBounty is state updater. 
        //prevBounty - arrow function syntax that takes input parameter called prevBouty, prevBounty.map - iterates over each element of array and returns modified elements
        //goOver - parameter representing each individual element in prevBounty array during iteration
        //goOver._id !== bountyId ? goOver : response - ternary - updates goOver, if ._id matches bountyId - if it does match it is edited. response returns updated bounty
      })
      .catch(error => (error))
  }

//DELETE - works similar to PUT/ editBounty function
function deleteBounty(bountyId){
axios.delete(`/bounty/${bountyId}`)
.then(response => {
  setBounty(prevBounty=> prevBounty.filter(goOver=> goOver._id!== bountyId))// Similar to the editBounty function except for the filter. Filters out element from prevBounty and creates a new array, if _id is equal to bountyId - calls setBounty(filteredArray)
})
.catch(error => (error))

}

  useEffect(() => {
    getBounty()
  }, []) //empty array which fires only once

  return (
    <div className='movie-container'>

      <AddBountyForm
        submit={addBounty}// When submit button clicked executes addBounty function(botton in AddBountyForm.js --- <button>{props.btnText}</button>)
        btnText="Add Bounty"
      />
      {/* 1. .map goes over the list of bounties and the {...hunt} spreads everything so we dont have to type in key value pair
  2. Doesn't display unless called in Bounty.js*/}
      {bounty.map(hunt =>
        <Bounty
          {...hunt} // spread operator(...) is used to pass all properties of the 'hunt' object as seperate props to the bounty.js.  
          key={hunt.title} // Used to assign a unique key to each rendered Bounty Componenet
          // Passing function editBounty as propsto Bounty.js
          editBounty={editBounty}
          //similar to the editBounty located in Bounty.js
          deleteBounty={deleteBounty}
        />)
      }
    </div>
  );
}

export default App;


//The  submit={props.editBounty}, btnText="Add Bounty" buttons are situated where the code would ve used/executed and where the elements are displayed
