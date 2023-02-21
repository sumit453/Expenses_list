import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [startEditing, setEditing] = useState(false);

  function saveExpenceDataHandeler(enteredExpenceData) {
    const expenseData = {
      ...enteredExpenceData,
      id: Math.random().toString(),
    };
    props.onAddExpenseHandeler(expenseData);
    setEditing(false);
  }

  function setEditingHandeler() {
    setEditing(true);
  }

  function stopSetEditingHandeler() {
    setEditing(false);
  }
  return (
    <div className="new-expense">
      {!startEditing && (
        <button onClick={setEditingHandeler}>Add new expense</button>
      )}
      {startEditing && (
        <ExpenseForm
          onSaveExpenceData={saveExpenceDataHandeler}
          cancelEditing={stopSetEditingHandeler}
        />
      )}
    </div>
  );
}

export default NewExpense;
