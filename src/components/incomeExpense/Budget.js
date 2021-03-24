import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { FiEdit } from 'react-icons/fi'

const Budget = () => {
  // get budget from AppContext
  const { budget, dispatch } = useContext(AppContext);

  // create isEditing state and set to false
  const [isEditing, setIsEditing] = useState(false);

  // declare name state variables for input
  const [name, setName] = useState("");

  // create handle edit function and name as the parameter to pass the state variable
  const handleEditclick = name => {
    // pass type and payload into dispatch function
    dispatch({
      type: 'EDIT_EXPENSE',
      payload: name,
    })
    setIsEditing(false)
  };


  // create view Template 
  // add onclick handler and setediting state to true
  const viewTemplate = (
    <div className="alert alert-secondary budget">
      <span><strong>Budget: </strong>${budget}</span>
      <FiEdit className='edit-btn' size='2em' onClick={() => setIsEditing(true)}/>
    </div>
  );
  // create edit Template
  // add onclick handler and set pass name state variable into handle edit funtion
  const editTemplate = (
      <div className="alert alert-secondary">
        <div className='row'>
          <div className='col'>
          <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
          </div>
        <button className='btn btn-primary'type="button" onClick={() => handleEditclick(name)}>Save</button>
     
        </div>
       
      </div>
  );
  
  return <>{isEditing ? editTemplate : viewTemplate}</>;
};

export default Budget;
