import React, { createContext, useReducer } from "react";
import {nanoid} from "nanoid";

//4. create AppReducer
export const AppReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// 1. set initial state
const initialState = {
  budget: 3000,
  expenses: [
    { id: nanoid(), name: "Groceries", cost: 400 },
    { id: nanoid(), name: "Gas", cost: 100 },
    { id: nanoid(), name: "Eating Out", cost: 100 },
  ],
};
// 2. create context
export const AppContext = createContext(initialState);

// 3. create provider
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        expenses: state.expenses,
        budget: state.budget,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
