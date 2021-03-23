import React, {useContext} from 'react'
import {TiDelete} from 'react-icons/ti'
import {AppContext} from '../../context/AppContext'

const ExpenseItem = ({id, name, cost}) => {
  // get dispatch from AppContext 
  const { dispatch } = useContext(AppContext)
  // create function to delete and pass to onClick handler
  const handleDelete = () => {
    // call dispatch function and pass type and payload id
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: id
    })
  }
  // add onClick handler to delete icon
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
      {name}
      <div>
        <span className='badge badge-primary badge-pill'>${cost}</span>
        <TiDelete className='delete' size='1.5em' onClick={handleDelete}/>
      </div>
    </li>
  )
}

export default ExpenseItem
