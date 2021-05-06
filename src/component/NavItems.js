import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function NavItems() {
    return (
        <div>
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
        </div>
    );
}

export default NavItems;