import React from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
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
                        <Route path="/a" component={UserHome} />
                        <Route path="/d" component={UserDetail} />
                        <Route path="/" component={Cart} />
                    </Switch>
                    <Footer />
                </Container>
            </div>
        </Router>
    );
}

export default LayoutUser;