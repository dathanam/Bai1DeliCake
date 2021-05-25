import React, { useState, useEffect } from 'react';
import { axios } from '../axios'
import { useHistory } from "react-router-dom";
import moment from 'moment'

function EditRecipe(props) {
    const id = props.match.params.id;
    const history = useHistory();
    const [objectURL, setObjectURL] = useState([]);
    const [listItems, setListItems] = useState([]);
    const getListItems = async () => {
        const response = await axios
            .get("api/v1/items")
            .catch((err) => console.log("Error: ", err));

        if (response && response.data) {
            setListItems(response.data.data);
        }
    }
    useEffect(() => {
        getListItems();
    }, []);


    const [dataEditRecipe, setDataEditRecipe] = useState({
        images_recipes: []
    })
    const hour = moment(dataEditRecipe.publish_at * 1000).format("YYYY-MM-DD")

    const sumImg = dataEditRecipe.images_recipes.length;
    const getArr = async () => {
        const response = await axios
            .get(`api/v1/recipes/` + id)
            .catch((err) => console.log("Error: ", err));

        if (response && response.data) {
            setDataEditRecipe(response.data.data[0]);
        }
    }
    useEffect(() => {
        getArr();
    }, []);

    //upload Image Cake
    const uploadImages = async () => {
        var formdataImg = new FormData();
        objectURL.map((item) => {
            formdataImg.append("file", item.post, "3.jpg");
        })
        axios.post(`api/v1/images_recipes/` + id, formdataImg).then((res) => {
            if (res.statusText === "OK") {
                getArr();
                setObjectURL([]);
            }
        })
    }
    useEffect(() => {
        uploadImages();
    }, [objectURL.length]);

    function submitRecipe(e) {
        e.preventDefault();
        axios.put(`api/v1/recipes/` + id, dataEditRecipe).then((res) => {
            if (res.statusText === "OK") {
                history.push("/admin/recipes")
            }
        })
    }

    function handle(e) {
        const newdata = { ...dataEditRecipe };
        newdata[e.target.id] = e.target.value;
        setDataEditRecipe(newdata);
    }

    function disabled() {
        if (sumImg === 4) {
            return (
                <input disabled="disabled" type="file" className="custom" onChange={(e) => setObjectURL([...objectURL, {
                    post: e.target.files[0],
                    url: URL.createObjectURL(e.target.files[0]),
                }])}></input>
            )
        } else {
            return (
                <input type="file" className="custom" onChange={(e) => setObjectURL([...objectURL, {
                    post: e.target.files[0],
                    url: URL.createObjectURL(e.target.files[0]),
                }])}></input>
            )
        }
    }

    return (
        <div className="NewRecipe">
            <div className="borderNewRecipe">
                <form onSubmit={(e) => submitRecipe(e)}>
                    <div className="row IDPublic">
                        <div className="col-12">
                            <h1>Cake Name: {dataEditRecipe.name_cake}</h1>
                        </div>
                        <div className="col-12">
                            <h6>Publish at: {moment(dataEditRecipe.publish_at * 1000).format("DD-MM-YYYY")}</h6>
                        </div>
                    </div>
                    <br />
                    <div>
                        <h3>Image</h3>
                        <div className="row abc">
                            {
                                dataEditRecipe.images_recipes.map((item) => {
                                    return (
                                        <div className="col-md-3 imgdetail">
                                            <img className="img-fluid" src={item.name} alt="cake" />
                                            <button type="button" className="btnDeleteImg"
                                                onClick={() => {
                                                    axios.delete(`api/v1/images_recipes/?_id=` + item.id)
                                                        .then(res => {
                                                            getArr();
                                                        })
                                                }
                                                }>
                                                <i class="far fa-trash-alt"></i></button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="row btnInputImg">
                            {
                                disabled()
                            }
                        </div>

                    </div>
                    <br />
                    <div>
                        <h3>Ingredients</h3>
                        <textarea onChange={(e) => handle(e)} id="ingredient" value={dataEditRecipe.ingredient} className="form-control"></textarea>

                    </div>
                    <br />
                    <div>
                        <h3>Directions</h3>
                        <textarea onChange={(e) => handle(e)} id="direction" value={dataEditRecipe.direction} className="form-control"></textarea>

                    </div>
                    <br />
                    <div className="btnnNewRecipe">
                        <button className="btnSave">Save</button>
                        <button type="button" className="btnCancel"
                            onClick={() => {
                                history.push("/admin/items")
                            }}
                        >Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditRecipe;