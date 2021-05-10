import React from 'react';
import './Style/HeaderCake.css';
import { BrowserRouter as Link } from "react-router-dom";

function HeaderCake() {
    return (
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
    );
}

export default HeaderCake;