import React, {useContext } from 'react'
import {AppContext} from '../../context/AppContext'

const Expense = () => {
  // get budget and expenses from AppContext
  const { expenses } = useContext(AppContext)

  // get total spent using reduce function with total and expense params
  // initial total to 0
  const totalSpent = expenses.reduce((total, expense) => {
    return (
      total += expense.cost
    )
  }, 0)
  return (
    <div className='alert alert-primary expense'>
      <span>Spent so far: ${totalSpent}</span>
    </div>
  )
}

export default Expense
