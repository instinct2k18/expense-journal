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
        <Route path="/" exact component={Home} />
        <Route path="/addBanks" exact component={AddBanks} />
        <Route path="/addExpense" exact component={AddExpense} />
        <Route path="/viewExpense" exact component={ViewExpense} />
      </Switch>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Component</h1>
  </div>
);

export default App;
