import React from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './CakeComponent/HeaderCake';
import ListOrder from './CakeComponent/ListOrder';
import Footer from './CakeComponent/Footer';
import Item from './CakeComponent/Item';
import prop from './CakeComponent/PopUp';

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          <Route path="/" component={Item} />
          <Route path="/items" component={Item} />
        </Switch>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
