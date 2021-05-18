import React, { useState, useEffect } from 'react';
import './Style/Recipes.css'
import { axios } from '../component/axios'
import { BrowserRouter as Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import DetailRecipe from '../CakeComponent/DetailRecipe'

function Recipes() {
    const history = useHistory();
    const [listRecipes, setListRecipes] = useState([]);
    const [inputName, setInputName] = useState({
        nameSearch: ""
    })
    const getRecipes = async () => {
        const response = await axios
            .get("api/v1/recipes")
            .catch((err) => console.log("Error: ", err));

        if (response && response.data) {
            setListRecipes(response.data.data);
        }
    }
    useEffect(() => {
        getRecipes();
    }, []);

    const [idRecipe, setIDRecipe] = useState({
        idcate: ""
    });

    const [listCategory, setListCategory] = useState([]);

    const getCategory = async () => {
        const response = await axios
            .get("api/v1/categories")
            .catch((err) => console.log("Error: ", err));

        if (response && response.data) {
            setListCategory(response.data.data)
        }
    }
    useEffect(() => {
        getCategory();
    }, []);

    // Search by ID
    const getSearch = async () => {
        if (inputName.nameSearch === "") {
            getRecipes();
        }
        else {
            const response = await axios
                .get(`api/v1/recipes/` + inputName.nameSearch)
                .catch((err) => console.log("Error: ", err));
            if (response && response.data) {
                setListRecipes(response.data.data);
            }
        }
    }
    useEffect(() => {
        getSearch();
    }, [inputName.nameSearch])

    function Search(e) {
        const newdata = { ...inputName };
        newdata[e.target.id] = e.target.value;
        setInputName(newdata);
    }

    function submitSearchName() {
        getSearch();
    }

    // search by category
    const [stt, setStt] = useState({
        name: ""
    });
    function handle(e) {
        const newdata = { ...stt };
        newdata[e.target.id] = e.target.value;
        setStt(newdata);
    }
    const getByStt = async () => {
        if (stt.name === "") {
            getRecipes()
        }
        else {
            const response = await axios
                .get(`api/v1/recipes/cate/` + stt.name)
                .catch((err) => console.log("Error: ", err));

            if (response && response.data) {
                setListRecipes(response.data.data)
            }
        }
    }
    useEffect(() => {
        getByStt();
    }, [stt.name]);

    return (
        <div className="recipes">
            <div className="borderRecipes">
                <div className="row">
                    <div className="col-md-3">
                        <form onSubmit={(e) => submitSearchName(e)}>
                            <input onChange={(e) => Search(e)} id="nameSearch" type="text" placeholder="ID/Name" />
                        </form>
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-3">
                        <select className="status" onChange={(e) => handle(e)} id="name" value={stt.name}>
                            <option value={""}>All</option>
                            <option value={"Birthday Cake"}>Birthday Cake</option>
                            <option value={"Cheese Cake"}>Cheese Cake</option>
                            <option value={"Dessert Cake"}>Dessert Cake</option>
                            <option value={"Bread"}>Bread</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <button className="btnAddSub"
                        > <Link to="/newrecipe" className="nav-link">Add New Recipes</Link></button>
                    </div>
                </div>
                <br />
                <div className="tableRecipes">
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>ID</th>
                                <th>Name Cake</th>
                                <th>Piblic at</th>
                                <th>Category</th>
                                <th>SubCategory</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listRecipes.map((item) => {
                                    return (
                                        <tr>
                                            <td>
                                                <input id="checkbox" type="checkbox" name={item.name} />
                                            </td>
                                            <td className="id">
                                                <label for={item.name}> {item.id}</label>
                                            </td>
                                            <td>{item.name_cake}</td>
                                            <td>{Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(item.publish_at)}</td>
                                            <td>{item.category}</td>
                                            <td>{item.subcategory}</td>
                                            <td className="abc">
                                                <button onClick={() => {
                                                    history.push("/admin/detailRecipe/" + item.id)
                                                }}>
                                                    <i class="fas fa-eye"></i>
                                                </button>
                                                <button>
                                                    <i className="fas fa-edit"></i>
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        axios.delete(`api/v1/recipes/?id=` + item.id)
                                                            .then(res => {
                                                                getRecipes();
                                                            })
                                                    }
                                                    }>
                                                    <i class="far fa-trash-alt"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Recipes;