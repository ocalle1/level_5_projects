import React from "react";
import AddBountyForm from "./AddBountyForm";



export default function Bounty(props){
    console.log(props)
    return(
        <>
        <div className="bounty">

        
        <div>
        <h1>First Name: {props.firstName}, Last Name: {props.lastName}</h1>
        <p>Living: {props.living}</p>
        <p>Bounty Amount: {props.amount}</p>
        <h2>type: {props.type}</h2>
        <button onClick={() => props.deleteBounty(props._id)}>Delete</button>
      </div>
        
        
        <AddBountyForm 
        firstName={props.firstName}
        lastName={props.lastName}
        living={props.living}
        amount={props.amount}
        type={props.type}
        _id={props._id}
        btnText="Submit Edit"
        // editBounty is the PUT/update function in App.js
        submit={props.editBounty}
        />
        </div>

        </>
      
    )
}