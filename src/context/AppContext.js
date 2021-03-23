/*
  1. Create initial state
  2. Create context
  3. Create provider
  4. Create reducer
  5. In Appreducer create case 1 return copy of state
*/
import React, { createContext, useReducer } from "react";
import { nanoid } from "nanoid";

// create AppReducer function with state and action as parameters
export const AppReducer = (state, action) => {
  // set switch statment to action type
  switch (action.type) {
    // create case add expense, return copy of state and expenses state and action payload
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    // create case delete expense
    case "DELETE_EXPENSE":
      // return copy of state and filter through expenses id and action payload
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    // set default to return state
    default:
      return state;
  }
};

// create initialState object and pass budget and expenses array with hard coded key-value pairs
const initialState = {
  budget: 5000,
  expenses: [
    { id: nanoid(), name: "Gas", cost: 100 },
    { id: nanoid(), name: "Groceries", cost: 400 },
  ],
};

// create AppContext from createContext and initialize with initialState
export const AppContext = createContext(initialState);
// create AppProvider pass children props
export const AppProvider = ({ children }) => {
  // set state and dispatch equal to useReducer
  // pass AppReducer function and initialState to useReducer
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // return AppContext.Provider pass budget state, expenses state and dispatch as value
  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
  // pass children props into AppContext.Provider
};
