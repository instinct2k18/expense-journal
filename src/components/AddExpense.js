import { useState } from "react";

function AddExpense({ addExpense, banks, updateBalance }) {
  const [expenseDescription, setExpenseDescription] = useState("");
  const [expenseAmount, setExpenseAmount] = useState(0);
  const [bank, setBank] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Expense Added successfully! ${bank}, ${expenseDescription}, ${expenseAmount}`
    );
    addExpense(expenseDescription, expenseAmount, bank);
    updateBalance(expenseAmount, bank);
    setBank("default");
    setExpenseAmount("");
    setExpenseDescription("");
  };

  return (
    <div>
      <h1>Add New Expense</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Expense Description"
          required
          onChange={(e) => setExpenseDescription(e.target.value)}
          value={expenseDescription}
        ></input>
        <br />
        <br />
        <input
          type="number"
          placeholder="Add Expense Amount"
          required
          onChange={(e) => setExpenseAmount(e.target.value)}
          value={expenseAmount}
        ></input>
        <br />
        <br />
        <select
          name="banks"
          id="banks"
          value={bank}
          onChange={(e) => setBank(e.target.value)}
        >
          <option value="default">Select a Bank</option>
          {banks.map((bank) => {
            return (
              <option key={bank.bankName} value={bank.bankName}>
                {bank.bankName}
              </option>
            );
          })}
        </select>
        <br />
        <br />
        <input type="submit" value="Add Expense" />
      </form>
    </div>
  );
}

export default AddExpense;
