import React, { useState, useEffect } from 'react';
import './Style/NewRecipe.css'
import { axios } from '../component/axios'

function NewRecipe() {
    const [objectURL, setObjectURL] = useState({
        url: "",
        post: ""
    });
    console.log(objectURL)
    useEffect(() => {
        if (!objectURL.url) return;
    }, [objectURL.post])

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

    //xuly New
    const urlCreateRecipe = "http://192.168.1.250:5012/api/v1/recipes/"
    const [dataCreateRecipe, setDataCreateRecipe] = useState({
        name: "",
        image: "",
        ingredient: "",
        direction: "",
        publish_at: "",
        subcategory_id: ""
    })
    function CreateRecipe(e) {
        e.preventDefault();
        Axios.post(urlCreateRecipe, {
            name: dataCreateRecipe.name,
            image: dataCreateRecipe.image,
            ingredient: dataCreateRecipe.ingredient,
            direction: dataCreateRecipe.direction,
            publish_at: dataCreateRecipe.publish_at,
            subcategory_id: dataCreateRecipe.subcategory_id
        }).then((res) => {
            if (res.statusText === "OK") {
                history.push("/recipes");
            }
        })
    }

    return (
        <div className="NewRecipe">
            <div className="borderNewRecipe">
                <form>
                    <div className="row IDPublic">
                        <div className="col-6">
                            <h3>ID</h3>
                            <input className="ID"></input>
                        </div>
                        <div className="col-6">
                            <h3>Public at</h3>
                            <input type="date" id="publish_at" value={dataCreateSubCategories.publish_at}></input>
                        </div>
                    </div>
                    <br />
                    <div>
                        <h3>Image</h3>
                        <input type="file" className="custom" onChange={(e) => setObjectURL({
                            post: e.target.files[0],
                            url: URL.createObjectURL(e.target.files[0])
                        })}
                            id="image" value={dataCreateSubCategories.image}
                        ></input>
                        <img className="imageCakeRecipes" src={objectURL.url} alt="Cake" width="150" height="150" />

                    </div>
                    <br />
                    <div>
                        <h3>Recipe Name</h3>
                        <div className="row">
                            <div className="col-10">
                                <input type="text" className="nameNewRecipe" id="name" value={dataCreateSubCategories.name}></input>
                            </div>
                            <div className="col-2">
                                <select>
                                    {
                                        listCategory.map((item) =>
                                            <option>{item.name}</option>)
                                    }
                                </select>
                            </div>

                        </div>

                    </div>
                    <br />
                    <div>
                        <h3>InGredients</h3>
                        <textarea className="form-control" id="ingredient" value={dataCreateSubCategories.ingredient}></textarea>

                    </div>
                    <br />
                    <div>
                        <h3>Directions</h3>
                        <textarea className="form-control" id="direction" value={dataCreateSubCategories.direction}></textarea>

                    </div>
                    <br />
                    <div className="btnnNewRecipe">
                        <button type="button" className="btnSave">Save</button>
                        <button type="button" className="btnCancel">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewRecipe;