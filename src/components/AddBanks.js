import React, { useState } from "react";

function AddBanks() {
  const [bankName, setBankName] = useState("");
  const [bankBalance, setBankBalance] = useState("");

  const [banks, setBanks] = useState([]);

  const addBank = (bankName, balance) => {
    setBanks([...banks, { bankName, balance }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBank(bankName, bankBalance);
    setBankName("");
    setBankBalance("");
  };

  return (
    <div>
      <h1>Add A new bank</h1>
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
      <form onSubmit={handleSubmit}>
        <label>Add a Bank</label>
        <input
          type="text"
          id="bankName"
          value={bankName}
          required
          onChange={(e) => setBankName(e.target.value)}
        ></input>
        <br />
        <br />
        <label>Add Balance</label>
        <input
          type="number"
          id="balance"
          value={bankBalance}
          required
          onChange={(e) => setBankBalance(e.target.value)}
        ></input>
        <br />
        <br />
        <input type="submit" value="Add Bank" />
      </form>
    </div>
  );
}

export default AddBanks;
