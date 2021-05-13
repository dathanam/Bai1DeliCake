import React, { useState, useEffect } from 'react';
import './Style/Recipes.css'
import { axios } from '../component/axios'

function Recipes(props) {
    const [listRecipes, setListRecipes] = useState([]);
    console.log("listRecipes", listRecipes)
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

    return (
        <div className="recipes">
            <div className="borderRecipes">
                <div className="row">
                    <div className="col-md-3">
                        <form >
                            <input type="text" placeholder="ID/Name" />
                            <button>search</button>
                        </form>
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-3">
                        <select>
                            {
                                listCategory.map((item) =>
                                    <option>{item.name}</option>)
                            }
                        </select>
                    </div>
                    <div className="col-md-3">
                        <button className="btnAddSub"

                        >Add New Recipes</button>
                    </div>
                </div>
                <br />
                <div className="tableRecipes">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>
                                    {/* <button
                                onClick={deleteItemById()}>
                                <i class="far fa-trash-alt"></i>
                            </button> */}
                                </th>
                                <th>ID</th>
                                <th>Title</th>
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
                                            <td>{item.title}</td>
                                            <td>{item.publish_at}</td>
                                            <td>{item.category}</td>
                                            <td>{item.subcategory}</td>
                                            <td className="abc">
                                                <button> <i className="fas fa-edit"></i>
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