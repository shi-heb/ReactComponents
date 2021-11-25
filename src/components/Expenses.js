import React, { useState } from 'react';
import ExpenseItem from '../components/ExpenseItem.js';
import ExpensesFilter from '../Expenses/ExpensesFilter.js';
function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  let expensesContent = <p>No expenses found.</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

    return (
      <div className="expenses">
         <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
         {expensesContent}
        
      </div>
    );
  }
  
  export default Expenses;