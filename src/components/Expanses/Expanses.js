import React, { useState } from "react";
import "./Expanses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [year, setYear] = useState("2020");

  function filterChangeHandeler(selectedYear) {
    console.log("Expense.js");
    setYear(selectedYear);
  }
  const filteredExpenses = props.expenses.filter(
    (item) => item.date.getFullYear().toString() === year
  );
  return (
    <Card className="expenses">
      <ExpensesFilter
        selectValue={year}
        onFilterChangeHandeler={filterChangeHandeler}
      />
      <ExpensesChart item={filteredExpenses} />
      <ExpensesList item={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
