import React, { useState, useEffect } from 'react';
import './Style/NewRecipe.css'
import { axios } from '../component/axios'
import Axios from 'axios'
import { useHistory } from "react-router-dom";

function NewRecipe() {
    const [objectURL, setObjectURL] = useState({
        url: "",
        post: ""
    });
    useEffect(() => {
        if (!objectURL.url) return;
    }, [objectURL.post])

    const [listCategoriesDetail, setlistCategoriesDetail] = useState([]);

    const getArr = async () => {
        const response = await axios
            .get("api/v1/items")
            .catch((err) => console.log("Error: ", err));

        if (response && response.data) {
            setlistCategoriesDetail(response.data.data);
        }
    }
    useEffect(() => {
        getArr();
    }, []);

    //xuly New
    const urlCreateRecipe = "http://192.168.1.250:5012/api/v1/images_recipes/create/"
    const [dataCreateRecipe, setDataCreateRecipe] = useState({
        ingredient: "",
        direction: "",
        publish_at: "",
        item_id: ""
    })
    const history = useHistory();
    function submit(e) {
        e.preventDefault();
        var formdata = new FormData();
        formdata.append("item_id", dataCreateRecipe.item_id);
        formdata.append("ingredient", dataCreateRecipe.ingredient);
        formdata.append("direction", dataCreateRecipe.direction);
        formdata.append("publish_at", parseInt((new Date(dataCreateRecipe.publish_at).getTime() / 1000).toFixed(0)));
        formdata.append("images", objectURL.post, "3.jpg");

        Axios.post(urlCreateRecipe, formdata).then((res) => {
            if (res.statusText === "OK") {
                history.push("/admin/recipes")
            }
        })
    }

    function handle(e) {
        const newdata = { ...dataCreateRecipe };
        newdata[e.target.id] = e.target.value;
        setDataCreateRecipe(newdata);
    }

    return (
        <div className="NewRecipe">
            <div className="borderNewRecipe">
                <form onSubmit={(e) => submit(e)}>
                    <div className="row IDPublic">
                        <div className="col-6">
                            <h3>Cake Name</h3>
                            <select onChange={(e) => handle(e)} id="item_id" value={dataCreateRecipe.item_id}>
                                {
                                    listCategoriesDetail.map((item) =>
                                        <option value={item.id}>{item.name}</option>)
                                }
                            </select>
                        </div>
                        <div className="col-6">
                            <h3>Public at</h3>
                            <input
                                type="date"
                                name="publish_at"
                                value={dataCreateRecipe.publish_at}
                                onChange={event => setDataCreateRecipe({
                                    "publish_at": event.target.value,
                                    "image": dataCreateRecipe.image,
                                    "ingredient": dataCreateRecipe.ingredient,
                                    "direction": dataCreateRecipe.direction,
                                    "item_id": dataCreateRecipe.item_id
                                })}
                            />
                        </div>
                    </div>
                    <br />
                    <div>
                        <h3>Image</h3>
                        <input type="file" className="custom" onChange={(e) => setObjectURL({
                            post: e.target.files[0],
                            url: URL.createObjectURL(e.target.files[0])
                        })}
                            id="image"
                        ></input>
                        <img className="imageCakeRecipes" src={objectURL.url} alt="Cake" width="150" height="150" />

                    </div>
                    <br />
                    <div>
                        <h3>InGredients</h3>
                        <textarea onChange={(e) => handle(e)} id="name" value={dataCreateRecipe.name} className="form-control" id="ingredient" ></textarea>

                    </div>
                    <br />
                    <div>
                        <h3>Directions</h3>
                        <textarea onChange={(e) => handle(e)} id="name" value={dataCreateRecipe.name} className="form-control" id="direction" ></textarea>

                    </div>
                    <br />
                    <div className="btnnNewRecipe">
                        <button className="btnSave">Save</button>
                        <button type="button" className="btnCancel">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewRecipe;