import React from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from './CakeComponent/HeaderCake';
// import ListOrder from './CakeComponent/ListOrder';
// import Footer from './CakeComponent/Footer';
// import Item from './CakeComponent/Item';
// import EditItems from './CakeComponent/EditItems';
// import Recipes from './CakeComponent/Recipes';
// import NewRecipe from './CakeComponent/NewRecipe';
// import NewCake from './CakeComponent/NewCake';
// import DetailRecipe from './CakeComponent/DetailRecipe';
// import UserDetail from './CakeUserComponent/Detail';
// import Cart from './CakeUserComponent/Cart';


// // User
// import UserHeader from './CakeUserComponent/Header';
// import UserHome from './CakeUserComponent/Home';

import DeliUser from './LayoutUser';
import DeliAdmin from './LayoutAdmin';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={DeliUser} />
        <Route path="/admin" component={DeliAdmin} />
      </Switch>
    </Router>

  );
}

export default App;
