import React, {useContext} from "react";
import ExpenseItem from './ExpenseItem'
import { AppContext} from '../../context/AppContext'


const ExpenseList = () => {
  // get expenses from AppContext
  const { expenses } = useContext(AppContext)

  return (
    <ul className='list-group mb-3 mt-3'>
      {expenses.map(expense => (
       <ExpenseItem key={expense.id} id={expense.id} name={expense.name} cost={expense.cost}/>
      ))}
    </ul>
  );
};

export default ExpenseList;
