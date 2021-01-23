function ViewExpense({ expenses }) {
  return (
    <div>
      <h1>All Expenses </h1>
      <div>
        <h3>Expense List</h3>
        <ul>
          {expenses &&
            expenses.map((expense) => {
              return (
                <ul>
                  <div>
                    <p>{expense.expenseDescription}</p>
                    <p>{expense.expenseAmount}</p>
                    <p>{expense.bank}</p>
                  </div>
                </ul>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default ViewExpense;
