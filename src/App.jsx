import CartPage from "./Pages/CartPage";
import HomePage from "./Pages/HomePage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom"
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/cart" component={CartPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
