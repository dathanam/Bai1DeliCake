import React, { useState, useEffect } from 'react';
import './Style/NewCake.css';
import Axios from 'axios';
import { useHistory } from "react-router-dom";
import { axios } from '../axios'

function NewCake(props) {
    const [listCategory, setListCategory] = useState([]);
    const getArr = async () => {
        const response = await axios
            .get("api/v1/categories")
            .catch((err) => console.log("Error: ", err));

        if (response && response.data) {
            setListCategory(response.data.data)
        }
    }
    useEffect(() => {
        getArr();
    }, []);

    const [objectURL, setObjectURL] = useState([]);

    // create
    const urlCreateItem = "http://192.168.1.250:5012/api/v1/images_items/create/"
    const [dataCreateItem, setDataCreateItem] = useState({
        name: "",
        size: "",
        price: "",
        product_detail: "",
        subcategory_id: "",
    })
    const history = useHistory();
    function submit(e) {
        e.preventDefault();
        var formdata = new FormData();
        formdata.append("name", dataCreateItem.name);
        formdata.append("size", dataCreateItem.size);
        formdata.append("price", dataCreateItem.price);
        formdata.append("product_detail", dataCreateItem.product_detail);
        formdata.append("subcategory_id", dataCreateItem.subcategory_id);
        objectURL.map((item) => {
            formdata.append("images", item.post, "3.jpg");
        })
        Axios.post(urlCreateItem, formdata).then((res) => {
            if (res.statusText === "OK") {
                history.push("/admin/items")
            }
        })
    }

    function handle(e) {
        const newdata = { ...dataCreateItem };
        newdata[e.target.id] = e.target.value;
        setDataCreateItem(newdata);
    }
    function disabled() {
        if (objectURL.length === 4) {
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
    function ShowSave() {
        if (objectURL.length === 0) {
            return (
                <button disabled="disabled" className="btnAddCakeSave">Save</button>
            )
        }
        else {
            return (
                <button className="btnAddCakeSave">Save</button>
            )
        }
    }
    return (
        <div className="newCake">
            <form onSubmit={(e) => submit(e)} >
                <div className="row rowCake">
                    <div className="col-7">
                        <div className="row btnInputImg">
                            <div className="col-12">
                                {disabled()}
                            </div>
                        </div>
                        <div className="ImgNewCake">
                            <div className="rowNewCake">
                                <div className="row">
                                    {
                                        objectURL.map((item) => {
                                            return (
                                                <div className="col-md-6" key={item.url}>
                                                    <img className="img-fluid" src={item.url} alt="logo" />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-5">
                        <div className="cakeBody">
                            <div className="row">
                                <div className="col-2">
                                    <h5 className="LabelNameInput">Name:</h5>
                                </div>
                                <div className="col-10">
                                    <input onChange={(e) => handle(e)} id="name" value={dataCreateItem.name} type="text" className="inputName" required />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-2">
                                    <p className="LabelSizeInput">Size:</p>
                                </div>
                                <div className="col-10">
                                    <input onChange={(e) => handle(e)} id="size" value={dataCreateItem.size} type="text" placeholder="10cm x 10cm" className="inputSize" required />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-2">
                                    <h6 className="LabelSizeInput">Price:</h6>
                                </div>
                                <div className="col-10">
                                    <input onChange={(e) => handle(e)} id="price" value={dataCreateItem.price} type="text" placeholder="$..." className="inputSize" required />
                                </div>
                            </div>
                            <br />
                            <select onChange={(e) => handle(e)} id="subcategory_id" value={dataCreateItem.subcategory_id}>
                                {
                                    listCategory.map((item) => {
                                        return (
                                            item.subcategory.map((icon) => {
                                                return (
                                                    <option value={icon.id}>{icon.name}</option>
                                                )
                                            })
                                        )
                                    })
                                }
                            </select>
                            <br />
                            <br />
                            <h4>Product Detail</h4>
                            <div className="row">
                                <div className="col-12">
                                    <textarea onChange={(e) => handle(e)} id="product_detail" value={dataCreateItem.product_detail} className="textCake"></textarea>
                                </div>
                            </div>
                            <br />
                            <div className="btnCake">
                                {ShowSave()}
                                <button type="button" className="btnAddCakeCancel"
                                    onClick={() => {
                                        history.push("/admin/items")
                                    }}
                                >Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default NewCake;
