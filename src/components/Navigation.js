import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

function Nav() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="#">Expense Journal</Navbar.Brand>
      <Nav className="ml-auto"></Nav>
      <ul className="nav-links">
        <Link className="link" to="/addBanks">
          <li>Add Bank</li>
        </Link>
        <Link className="link" to="/addExpense">
          <li>Add Expense</li>
        </Link>
      </ul>
    </Navbar>
  );
}

export default Nav;
