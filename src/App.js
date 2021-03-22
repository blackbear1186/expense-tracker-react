import "./App.css";
import Header from "./components/Header";
import Budget from "./components/incomeExpense/Budget";
import Remaining from "./components/incomeExpense/Remaining";
import Expense from "./components/incomeExpense/Expense";
import ExpenseList from "./components/expenses/ExpenseList";

function App() {
  return (
    <div>
      <div className="container">
        <Header />
        <div className="flex-container">
          <Budget />
          <Remaining />
          <Expense />
        </div>
        <ExpenseList />
      </div>
    </div>
  );
}

export default App;
