import React, {useContext} from 'react'
import { AppContext} from '../../context/AppContext'

const Budget = () => {
  // get budget from AppContext
  const { budget } = useContext(AppContext)

  return (
      <div className='alert alert-secondary budget'>
        <span>Budget: ${budget}</span>
        <button className='btn btn-primary' type='button'>Edit</button>
      </div>
  )
}

export default Budget
