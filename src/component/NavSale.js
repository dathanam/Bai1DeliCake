import React, { useState } from 'react';
import '../component/HeaderSale.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler
} from 'reactstrap';
import NavItems from '../component/NavItems';
import NewFood from '../component/NewFood';
import HeaderSale from '../component/HeaderSale';


const NavSale = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <a className="navbar-brand" href="#"><img class="imgFaceBook" src="https://ios.codevn.net/wp-content/uploads/2018/01/facebook.jpg"></img></a>
                <form className="form-inline" action="/action_page.php">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-success" type="submit">Search</button>
                </form>

                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/product" className="nav-link">Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cart" className="nav-link">Cart</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavSale;