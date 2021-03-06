import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Review from "./components/Review/Review";
import Inventory from "./components/inventory/Inventory";
import Notfound from "./components/No-match/Notfound";
import Productdetail from "./components/Productdetails/Productdetail";

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/Shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/product/:productKey">
            <Productdetail></Productdetail>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
