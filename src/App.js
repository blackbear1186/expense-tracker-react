import "./App.css";
import Header from "./components/Header";
import Budget from "./components/incomeExpense/Budget";
import Remaining from "./components/incomeExpense/Remaining";
import Expense from "./components/incomeExpense/Expense";
import ExpenseList from "./components/expenses/ExpenseList";
import AddExpense from "./components/expenses/AddExpense";
import {AppProvider} from './context/AppContext'

function App() {
  return (
    <AppProvider>
      <div className="container">
        <Header />
        <div className="flex-container">
          <Budget />
          <Remaining />
          <Expense />
        </div>
        <ExpenseList />
        <h3 className="mt-3">Add Expense</h3>

        <AddExpense />
      </div>
    </AppProvider>
  );
}

export default App;
