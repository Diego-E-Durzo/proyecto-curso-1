import React from "react";
import Card from "./Card";
import ExpensesDate from "./ExpensesDate";
import "../Style/ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="item-container">
        <ExpensesDate date={props.date} />
        <div className="item-description">
          <h2>{props.title}</h2>
          <div className="item-price">{props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
