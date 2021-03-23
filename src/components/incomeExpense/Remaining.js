import React, {useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const Remaining = () => {
  const { budget, expenses } = useContext(AppContext)
  const totalExpense = expenses.reduce((total, item) => {
    return (total = total + item.cost)
  }, 0)
  const remaining = budget - totalExpense;
  return (
      <div className='alert alert-success remaining'>
        <span className='remaining-span'>Remaining: ${remaining}</span>
      </div>
  )
}

export default Remaining
