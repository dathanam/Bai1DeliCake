import React from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Header from './CakeComponent/HeaderCake';
import ListOrder from './CakeComponent/ListOrder';
import Footer from './CakeComponent/Footer';
import Item from './CakeComponent/Item';
import EditItems from './CakeComponent/EditItems';
import Recipes from './CakeComponent/Recipes';
import NewRecipe from './CakeComponent/NewRecipe';
import NewCake from './CakeComponent/NewCake';
import DetailRecipe from './CakeComponent/DetailRecipe';

function LayoutAdmin() {
    return (
        <Router>
            <div>
                <Container>
                    <Header />
                    <Switch>
                        <Route path="/admin" exact component={ListOrder} />
                        <Route path="/admin/items" component={Item} />
                        <Route path="/admin/edititem/:id" component={EditItems} />
                        <Route path="/admin/recipes" component={Recipes} />
                        <Route path="/admin/newrecipe" component={NewRecipe} />
                        <Route path="/admin/newcake" component={NewCake} />
                        <Route path="/admin/detailRecipe/:id" component={DetailRecipe} />
                    </Switch>
                    <Footer />
                </Container>
            </div>
        </Router>
    );
}

export default LayoutAdmin;