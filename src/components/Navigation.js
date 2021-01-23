import "./Navigation.css";

import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <Link className="link" to="/">
        <h3 className="nav-brand">Expense Journal</h3>
      </Link>
      <ul className="nav-links">
        <Link className="link" to="/addBanks">
          <li>Add Bank</li>
        </Link>
        <Link className="link" to="/addExpense">
          <li>Add Expense</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
