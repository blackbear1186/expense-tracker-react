/*
  1. Create initial state
  2. Create context
  3. Create provider
  4. Create reducer
  5. In Appreducer create case 1 return copy of state
*/
import React, {createContext, useReducer} from 'react'
import {nanoid} from 'nanoid'

export const AppReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload ],
      }

    default:
      return state
  }
}

const initialState = {
  budget: 6000,
  expenses: [
    {id: nanoid(), name: 'Gas', cost: 200},
    {id: nanoid(), name: 'Groceries', cost: 450},
    {id: nanoid(), name: 'Eat out', cost: 100},
  ]
}
  

export const AppContext = createContext(initialState)

export const AppProvider = ({children}) => {

  const [state, dispatch] = useReducer(AppReducer, initialState)

  return (
    <AppContext.Provider value={{
      budget: state.budget,
      expenses: state.expenses,
      dispatch,
    }}>
      {children}
    </AppContext.Provider>
  )
}