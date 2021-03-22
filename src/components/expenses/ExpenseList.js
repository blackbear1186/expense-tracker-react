import React from 'react'
import {RiDeleteBack2Fill } from 'react-icons/ri'

const ExpenseList = () => {
  return (
    <div className='expense-list'>
     <span>Groceries</span>
     <div>
     <span>$300</span>
      <RiDeleteBack2Fill />
     </div>
    </div>
  )
}

export default ExpenseList
