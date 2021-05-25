import React, { useState, useEffect } from 'react';
import { axios } from '../axios'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useHistory } from "react-router-dom";
import Axios from 'axios';

function EditCake(props) {
    const id = props.match.params.id
    const history = useHistory();
    const [objectURL, setObjectURL] = useState([]);


    const [dataEditCake, setDataEditCake] = useState({
        name: "",
        size: "",
        price: "",
        product_detail: "",
        subcategory_id: "",
        images_items: []
    })
    const sumImg = dataEditCake.images_items.length;

    const getArr = async () => {
        const response = await axios
            .get(`api/v1/items/` + id)
            .catch((err) => console.log("Error: ", err));

        if (response && response.data) {
            setDataEditCake(response.data.data[0]);
        }
    }
    useEffect(() => {
        getArr();
    }, []);


    function submitCake(e) {
        e.preventDefault();
        Axios.put("http://192.168.1.250:5012/api/v1/items/" + id, dataEditCake).then((res) => {
            if (res.statusText === "OK") {
                history.push('/admin/items')
            }
        })
    }
    useEffect(() => {
        getArr();
    }, []);

    function handle(e) {
        const newdata = { ...dataEditCake };
        newdata[e.target.id] = e.target.value;
        setDataEditCake(newdata);
    }

    //upload Image Cake
    const uploadImages = async () => {
        var formdataImg = new FormData();
        objectURL.map((item) => {
            formdataImg.append("file", item.post, "3.jpg");
        })
        Axios.post("http://192.168.1.250:5012/api/v1/images_items/" + id, formdataImg).then((res) => {
            if (res.statusText === "OK") {
                getArr();
                setObjectURL([]);
            }
        })
    }
    useEffect(() => {
        uploadImages();
    }, [objectURL.length]);

    // Disabled input img
    function disabled() {
        if (sumImg === 4) {
            return (
                <input disabled="disabled" type="file" className="custom" onChange={(e) =>
                    setObjectURL([...objectURL, {
                        post: e.target.files[0],
                        url: URL.createObjectURL(e.target.files[0]),
                    }])
                }></input>
            )
        } else {
            return (
                <input type="file" className="custom" onChange={(e) =>
                    setObjectURL([...objectURL, {
                        post: e.target.files[0],
                        url: URL.createObjectURL(e.target.files[0]),
                    }])
                }></input>
            )
        }
    }

    return (
        <div className="newCake">
            <div className="row rowCake">
                <div className="col-7 ddd">
                    <div>
                        <div className="row avata">
                            <div className="col-12">
                                <div className="col-12">
                                    <div id="demo" className="carousel slide" data-ride="carousel">
                                        <ul className="carousel-indicators">
                                            <li data-target="#demo" data-slide-to="0" className="active"></li>
                                            <li data-target="#demo" data-slide-to="1"></li>
                                            <li data-target="#demo" data-slide-to="2"></li>
                                        </ul>


                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img className="img-fluid" src="https://i.ytimg.com/vi/EJ5AlErxLWY/maxresdefault.jpg" alt="logo" />
                                            </div>
                                            <div className="carousel-item">
                                                <img className="img-fluid" src="https://i.ytimg.com/vi/EJ5AlErxLWY/maxresdefault.jpg" alt="logo" />
                                            </div>
                                            <div className="carousel-item">
                                                <img className="img-fluid" src="https://i.ytimg.com/vi/EJ5AlErxLWY/maxresdefault.jpg" alt="logo" />
                                            </div>
                                        </div>


                                        <a className="carousel-control-prev" href="#demo" data-slide="prev">
                                            <span className="carousel-control-prev-icon"></span>
                                        </a>
                                        <a className="carousel-control-next" href="#demo" data-slide="next">
                                            <span className="carousel-control-next-icon"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row abc">
                            {
                                dataEditCake.images_items.map((item) => {
                                    return (
                                        <div className="col-3 imgdetail">
                                            <img className="img-fluid" src={item.name} alt="cake" />
                                            <button type="button" className="btnDeleteImg"
                                                onClick={() => {
                                                    axios.delete(`api/v1/images_items/?_id=` + item.id)
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
                </div>
                <div className="col-5">
                    <div className="cakeBody">
                        <form onSubmit={(e) => submitCake(e)}>
                            <div className="row">
                                <div className="col-2">
                                    <h5 className="LabelNameInput">Name:</h5>
                                </div>
                                <div className="col-10">
                                    <input onChange={(e) => handle(e)} id="name" value={dataEditCake.name} type="text" className="inputName" required />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-2">
                                    <p className="LabelSizeInput">Size:</p>
                                </div>
                                <div className="col-10">
                                    <input onChange={(e) => handle(e)} id="size" value={dataEditCake.size} type="text" placeholder="10cm x 10cm" className="inputSize" required />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-2">
                                    <h6 className="LabelSizeInput">Price:</h6>
                                </div>
                                <div className="col-10">
                                    <input onChange={(e) => handle(e)} id="price" value={dataEditCake.price} type="text" placeholder="$..." className="inputSize" required />
                                </div>
                            </div>
                            <br />
                            {/* <select onChange={(e) => handle(e)} id="subcategory_id" value={dataEditCake.subcategory_id}>
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
                            </select> */}
                            <br />
                            <br />
                            <h4>Product Detail</h4>
                            <div className="row">
                                <div className="col-12">
                                    <textarea onChange={(e) => handle(e)} id="product_detail" value={dataEditCake.product_detail} className="textCake"></textarea>
                                </div>
                            </div>
                            <br />
                            <div className="btnCake">
                                <button className="btnAddCakeSave">Save</button>
                                <button type="button" className="btnAddCakeCancel"
                                    onClick={() => {
                                        history.push("/admin/items")
                                    }}
                                >Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditCake;