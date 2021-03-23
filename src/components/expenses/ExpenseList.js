import React from "react";
import { nanoid } from 'nanoid'
import ExpenseItem from './ExpenseItem'

const ExpenseList = () => {
  const expenses = [
    { id: nanoid(), name: 'Groceries', cost: 300},
    { id: nanoid(), name: 'Gas', cost: 150},
    { id: nanoid(), name: 'Eating Out', cost: 100},
  ]
  return (
    <ul className='list-group mb-3 mt-3'>
      {expenses.map(expense => (
       <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost}/>
      ))}
    </ul>
  );
};

export default ExpenseList;
