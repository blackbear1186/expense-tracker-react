import React from "react";

const AddExpense = () => {
  return (
    <form className="container">
      <div className="row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a expense"
          ></input>
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Enter the cost"
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
