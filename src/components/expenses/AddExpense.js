/*
  1. create state variables for add and cost
  2. add value and onChange to input 
  3. import useContext, Appcontext
  4. destructure dispatch equal to useContext and pass AppContext 
  5. In onSubmit function add expense with key-value pairs
  6. Add dispatch function with type and payload
*/
import { nanoid } from "nanoid";
import React, {useState, useContext} from "react";
import { AppContext } from '../../context/AppContext'


const AddExpense = () => {
  const { dispatch } = useContext(AppContext)

  const [name, setName] = useState('')
  const [cost, setCost] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    const expense = {
      id: nanoid(),
      name: name,
      cost: parseInt(cost)
    }
    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense
    })
    setName('')
    setCost('')
  }

  return (
    <form onSubmit={handleSubmit} className="container">
      <div className="row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Enter an expense"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Enter the cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          ></input>
        </div>
     
      </div>
      <div className='mt-3 mx-auto'>
      <button type="submit" className="btn btn-info btn-block">
            Add Expense
          </button>
      </div>
   
    </form>
  );
};

export default AddExpense;
