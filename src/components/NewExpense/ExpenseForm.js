import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnterAmount] = useState("");
  const [enteredDate, setDate] = useState("");

  function titleChangeHandeler(event) {
    setEnteredTitle(event.target.value);
  }

  function amountHandeler(event) {
    setEnterAmount(event.target.value);
  }

  function dateHandeler(event) {
    setDate(event.target.value);
  }

  function submitHandeler(event) {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenceData(expenseData);

    setEnteredTitle("");
    setEnterAmount("");
    setDate("");
  }
  return (
    <form onSubmit={submitHandeler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandeler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountHandeler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="Date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateHandeler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.cancelEditing}>
          Cancel
        </button>
        <button type="submit">Add Expenses</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
