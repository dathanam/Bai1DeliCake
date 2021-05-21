import React, { useState, useEffect } from 'react';
import { axios } from '../component/axios';
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function EditCake(props) {

    const [dataEditCake, setDataEditCake] = useState({
        name: "",
        size: "",
        price: "",
        product_detail: "",
        subcategory_id: "",
        images_items: []
    })
    console.log("fffs", dataEditCake)

    useEffect(() => {
        const id = props.match.params.id
        axios.get("api/v1/items/" + id)
            .then(res => {
                setDataEditCake(res.data.data)
                console.log(res.data.data)
            })
            .catch((err) => console.log("Error: ", err));
    }, []);
    // function submit(e) {
    //     e.preventDefault();
    //     const id = props.match.params.id
    //     Axios.put(url + id + ".json", data).then((res) => {
    //         if (res.statusText === "OK") {
    //             history.push("/");
    //         }
    //     })
    // }

    function handle(e) {
        const newdata = { ...dataEditCake };
        newdata[e.target.id] = e.target.value;
        setDataEditCake(newdata);
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
                            <div className="col-3 imgdetail">
                                <img className="img-fluid" src="https://th.bing.com/th/id/Rf9d392d758a9039d082850eded33ec79?rik=seEtV8YA5vY9sA&pid=ImgRaw" alt="logo" />
                            </div>
                            <div className="col-3 imgdetail">
                                <img className="img-fluid" src="https://th.bing.com/th/id/Rf9d392d758a9039d082850eded33ec79?rik=seEtV8YA5vY9sA&pid=ImgRaw" alt="logo" />
                            </div>
                            <div className="col-3 imgdetail">
                                <img className="img-fluid" src="https://th.bing.com/th/id/Rf9d392d758a9039d082850eded33ec79?rik=seEtV8YA5vY9sA&pid=ImgRaw" alt="logo" />
                            </div>
                            <div className="col-3 imgdetail">
                                <img className="img-fluid" src="https://th.bing.com/th/id/Rf9d392d758a9039d082850eded33ec79?rik=seEtV8YA5vY9sA&pid=ImgRaw" alt="logo" />
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

                            <button type="button" className="btnAddCakeCancel">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditCake;