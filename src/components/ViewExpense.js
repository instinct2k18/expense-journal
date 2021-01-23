function ViewExpense({ expenses, banks }) {
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
      <div>
        <h3>Bank List</h3>
        <ul>
          {banks &&
            banks.map((bank) => {
              return (
                <li key={bank.bankName}>
                  <div>
                    <h3>{bank.bankName}</h3>
                    <p>{bank.balance}</p>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default ViewExpense;
