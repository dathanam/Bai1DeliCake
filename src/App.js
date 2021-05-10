import React from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Header from './CakeComponent/HeaderCake';
import ListOrder from './CakeComponent/ListOrder';
import Footer from './CakeComponent/Footer';
import Item from './CakeComponent/Item';
import EditItems from './CakeComponent/EditItems'

function App() {
  return (
    <Router>
      <div>
        <Container>
          <div>
            <nav className="navbar navbar-expand-sm">
              <a className="navbar-brand">
                <img src="https://th.bing.com/th/id/Rf9d392d758a9039d082850eded33ec79?rik=seEtV8YA5vY9sA&pid=ImgRaw" alt="logo" />
              </a>

              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">List Order</Link>
                </li>
                <li className="nav-item">
                  <Link to="/items" className="nav-link">Items</Link>
                </li>
                <li className="nav-item">
                  <Link to="/recipes" className="nav-link">Recipes</Link>
                </li>
              </ul>
            </nav>
          </div>
          <Switch>
            <Route path="/" exact component={ListOrder} />
            <Route path="/items" component={Item} />
            <Route path="/edititem/:id" component={EditItems} />
          </Switch>
          <Footer />
        </Container>
      </div>
    </Router>
  );
}

export default App;
