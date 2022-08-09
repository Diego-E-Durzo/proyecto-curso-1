import React from "react";
import Graphic from "./Graphic";

const ExpensesGraphic = (props) => {
  const graphicDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 }
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    graphicDataPoints[expenseMonth].value += expense.amount;
  }

  return <Graphic dataPoints={graphicDataPoints}/>
};

export default ExpensesGraphic;