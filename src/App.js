import React from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import NewFood from './component/NewFood';
// import Home from './component/home';
// import DeleteFood from './component/DeleteFood';
// import EditFood from './component/EditFood';


import Header from './CakeComponent/HeaderCake';
import List_Order from './CakeComponent/List_Order';
import Footer from './CakeComponent/Footer';
import Item from './CakeComponent/Item';



function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          <Route path="/" component={List_Order} />
          <Route path="/items" component={Item} />
        </Switch>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;

{/* <Route path="/" exact component={Home} />
            <Route path="/newfood" component={NewFood} />
            <Route path="/deletefood" component={DeleteFood} />
            <Route path="/editfood/:id" component={EditFood} /> */}