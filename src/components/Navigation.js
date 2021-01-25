import { Link } from "react-router-dom";
import "./Navigation.css";

function Nav() {
  return (
    <nav>
      <Link to="/" className="nav-brand link">
        <h3>Expense Journal</h3>
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
