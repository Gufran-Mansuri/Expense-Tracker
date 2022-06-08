import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseChart from "./ExpenseChart";
import ExpenseFilter from "./ExpenseFilter";
function Expenses(props) {
  const [filtereYear, setFilteredYear] = useState("2020");
  const addExpenseFilter = (enteredFilterData) => {
    setFilteredYear(enteredFilterData);
  };
  const filteredArray = props.item.filter(expenses => {
    return (expenses.date.getFullYear().toString() === filtereYear)
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filtereYear}
        onSaveExpenseFilter={addExpenseFilter}
      />
      <ExpenseChart expenses={filteredArray} />
      {filteredArray.length === 0 && <p className="expenses-list__fallback">No Expenses Found!!</p>}
      {filteredArray.length > 0 && filteredArray.map((expenses) => (
        <ExpenseItem
          key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
