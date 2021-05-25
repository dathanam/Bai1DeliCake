import React from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './CakeComponent/HeaderCake';
import ListOrder from './CakeComponent/ListOrder';
import Footer from './CakeComponent/Footer';
import Item from './CakeComponent/Item';
import Recipes from './CakeComponent/Recipes';
import NewRecipe from './CakeComponent/NewRecipe';
import NewCake from './CakeComponent/NewCake';
import DetailRecipe from './CakeComponent/DetailRecipe';
import EditCake from './CakeComponent/EditCake';
import EditRecipe from './CakeComponent/EditRecipe';

function LayoutAdmin() {
    return (
        <Router>
            <div>
                <Container>
                    <Header />
                    <Switch>
                        <Route path="/admin" exact component={ListOrder} />
                        <Route path="/admin/items" component={Item} />
                        <Route path="/admin/recipes" component={Recipes} />
                        <Route path="/admin/newrecipe" component={NewRecipe} />
                        <Route path="/admin/newcake" component={NewCake} />
                        <Route path="/admin/detailRecipe/:id" component={DetailRecipe} />
                        <Route path="/admin/editcake/:id" component={EditCake} />
                        <Route path="/admin/editrecipe/:id" component={EditRecipe} />
                    </Switch>
                    <Footer />
                </Container>
            </div>
        </Router>
    );
}

export default LayoutAdmin;