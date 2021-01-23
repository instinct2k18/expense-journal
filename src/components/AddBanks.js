import React, { useState } from "react";

function AddBanks({ addBank }) {
  const [bankName, setBankName] = useState("");
  const [bankBalance, setBankBalance] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addBank(bankName, bankBalance);
    setBankName("");
    setBankBalance("");
  };

  return (
    <div>
      <h1>Add A new bank</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="bankName"
          value={bankName}
          placeholder="Bank Name"
          required
          onChange={(e) => setBankName(e.target.value)}
        ></input>
        <br />
        <br />
        <input
          type="number"
          id="balance"
          value={bankBalance}
          required
          placeholder="Bank Balance"
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
