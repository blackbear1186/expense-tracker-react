import React, {useContext} from "react";
import ExpenseItem from './ExpenseItem'
import { AppContext } from '../../context/AppContext'

const ExpenseList = () => {

  const { expenses } = useContext(AppContext)

  return (
    <ul className='list-group mb-3 mt-3'>
      {expenses.map(expense => (
       <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost}/>
      ))}
    </ul>
  );
};

export default ExpenseList;
