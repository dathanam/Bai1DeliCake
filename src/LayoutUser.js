import React from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserHeader from './CakeUserComponent/Header';
import Footer from './CakeComponent/Footer';
import UserHome from './CakeUserComponent/Home';
import UserDetail from './CakeUserComponent/Detail';
import Cart from './CakeUserComponent/Cart';

function LayoutUser() {
    return (
        <Router>
            <div>
                <Container>
                    <UserHeader />
                    <Switch>
                        <Route path="/" exact component={UserHome} />
                        <Route path="/userdetail" component={UserDetail} />
                        <Route path="/cart" component={Cart} />
                    </Switch>
                    <Footer />
                </Container>
            </div>
        </Router>
    );
}

export default LayoutUser;