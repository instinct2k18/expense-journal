import "./App.css";
import Nav from "./components/Navigation";
import AddBanks from "./components/AddBanks";
import AddExpense from "./components/AddExpense";
import ViewExpense from "./components/ViewExpense";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact render={() => <ViewExpense />} />
        <Route path="/addBanks" exact render={() => <AddBanks />} />
        <Route path="/addExpense" exact render={() => <AddExpense />} />
      </Switch>
    </Router>
  );
}

export default App;
