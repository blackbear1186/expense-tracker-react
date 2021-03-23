import React, {useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const Remaining = () => {
  // 1. get budget and expenses from AppContext
  const { budget, expenses } = useContext(AppContext)
  // 2. get expenses total using reduce function, set to variable and 
  // initialize to zero
  const totalExpense = expenses.reduce((total, expense) => {
    return (
      total += expense.cost
    )
  }, 0)


  // 3. set total after subtracting totalexpense from budget to remaining var
  const remainder = budget - totalExpense;

  // create conditional alert if totalExpense is greater than budget return alert-danger
  const alertType = totalExpense > budget ? 'alert alert-danger' : 'alert alert-success';

  return (
      <div className={`${alertType} remaining`}>
        <span className='remaining-span'>Remaining: ${remainder}</span>
      </div>
  )
}

export default Remaining
