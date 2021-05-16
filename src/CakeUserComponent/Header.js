import React from 'react';
import '../CakeComponent/Style/User/Header.css'
import { BrowserRouter as Link } from "react-router-dom";

function Header() {

    return (
        <div className="headerUser">
            <nav className="navbar navbar-expand-sm">
                <a className="navbar-brand">
                    <img src="https://th.bing.com/th/id/Rf9d392d758a9039d082850eded33ec79?rik=seEtV8YA5vY9sA&pid=ImgRaw" alt="logo" />
                </a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/user" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            Category
                        </a>
                        <div className="dropdown-menu ">
                            <div className="row categoryBody">
                                <div className="col-md-3">
                                    <h6>BirthDay Cake</h6>
                                    <div className="UserSub">
                                        <p>Hello</p>
                                        <p>Hello</p>
                                        <p>Hello</p>
                                        <p>Hello</p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <h6>BirthDay Cake</h6>
                                    <div className="UserSub">
                                        <p>Hello</p>
                                        <p>Hello</p>
                                        <p>Hello</p>
                                        <p>Hello</p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <h6>BirthDay Cake</h6>
                                    <div className="UserSub">
                                        <p>Hello</p>
                                        <p>Hello</p>
                                        <p>Hello</p>
                                        <p>Hello</p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <h6>BirthDay Cake</h6>
                                    <div className="UserSub">
                                        <p>Hello</p>
                                        <p>Hello</p>
                                        <p>Hello</p>
                                        <p>Hello</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to="/user/recipes" className="nav-link">Recipes</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/user/aboutus" className="nav-link">About us</Link>
                    </li>
                </ul>
                <div className="UserSearchCake">
                    <form>
                        <input type="text" placeholder="cake" />
                        <button>
                            <i class="fas fa-search"></i>
                        </button>
                    </form>

                </div>

                <div className="userCart">
                    <i class="fas fa-shopping-cart"></i>
                </div>
                <p className="numberNav">0</p>
            </nav>
        </div>
    );
}

export default Header;
