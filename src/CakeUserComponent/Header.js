import React, { useEffect, useState } from 'react';
import '../CakeComponent/Style/User/Header.css'
import { Link } from "react-router-dom";
import { axios } from '../axios'

function Header() {

    // get list sub and category
    const [subAndCatesory, setSubAndCatesory] = useState([]);
    const getSubAndCatesory = async () => {
        const response = await axios
            .get("api/v1/categories")
            .catch((err) => console.log("Error: ", err));

        if (response && response.data) {
            setSubAndCatesory(response.data.data);
        }
    }
    useEffect(() => {
        getSubAndCatesory();
    }, []);

    return (
        <div className="headerUser">
            <nav className="navbar navbar-expand-sm">
                <a className="navbar-brand">
                    <img src="https://th.bing.com/th/id/Rf9d392d758a9039d082850eded33ec79?rik=seEtV8YA5vY9sA&pid=ImgRaw" alt="logo" />
                </a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            Category
                        </a>
                        <div className="dropdown-menu menuDropdow">
                            <div className="row categoryBody">
                                {
                                    subAndCatesory.map((item) => {
                                        return (
                                            <div className="col-md-3 " key={item.id}>
                                                <h5 className="categoryHead">{item.name}</h5>
                                                <div className="UserSub">
                                                    {
                                                        item.subcategory.map((icon) => {
                                                            return (
                                                                <p className="subcategoryHead" key={icon.id}>{icon.name}</p>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to="/recipes" className="nav-link">Recipes</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/aboutus" className="nav-link">About us</Link>
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
