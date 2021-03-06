import React, { useState, useEffect } from 'react';
import './Style/DetailRecipe.css';
import { axios } from '../axios'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useHistory } from "react-router-dom";

function DetailRecipe(props) {
    const history = useHistory();
    const [recipesDetail, setRecipesDetail] = useState([]);
    const getArr = async () => {
        const response = await axios
            .get(`api/v1/recipes/` + props.match.params.id)
            .catch((err) => console.log("Error: ", err));

        if (response && response.data) {
            setRecipesDetail(response.data.data);
        }
    }
    useEffect(() => {
        getArr();
    }, []);
    return (
        <div className="detailRecipe">
            <div className="boderDetailRecipe">

                {
                    recipesDetail.map((item) => {
                        return (
                            <>
                                <div className="row">
                                    <h2>{item.name_cake}</h2>
                                </div>
                                <div className="row">
                                    <div className="col-8 imgDetail">
                                        <div className="row">
                                            <div id="demo" className="carousel slide" data-ride="carousel">
                                                <ul className="carousel-indicators">
                                                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                                                    <li data-target="#demo" data-slide-to="1"></li>
                                                    <li data-target="#demo" data-slide-to="2"></li>
                                                </ul>


                                                <div className="carousel-inner">
                                                    {
                                                        item.images_recipes.map((icon) => {
                                                            return (
                                                                <div className="carousel-item active">
                                                                    <img className="img-fluid" src={icon.name} alt="cake" />
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>


                                                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                                                    <span className="carousel-control-prev-icon"></span>
                                                </a>
                                                <a className="carousel-control-next" href="#demo" data-slide="next">
                                                    <span className="carousel-control-next-icon"></span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="row abcd">
                                            {
                                                item.images_recipes.map((icon) => {
                                                    return (
                                                        <div className="col-3 imgdetaill">
                                                            <img className="img-fluid" src={icon.name} alt="logo" />
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <h4>Ingredients</h4>
                                        <div className="bodyIngredients">
                                            <div className="row">
                                                <div className="col-0">
                                                    <i className="fas fa-hand-point-right" />
                                                </div>
                                                <div className="col-11">
                                                    <h6>{item.ingredient}</h6>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <h4>Directions</h4>
                                </div>
                                <div className="bodyDirections">
                                    <div className="row">
                                        <div className="col-0">
                                            <i className="fas fa-hand-point-right" />
                                        </div>
                                        <div className="col-11">
                                            <p><h6>Step 1</h6>{item.direction}</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <button type="button" className="btnBack"
                                        onClick={() => {
                                            history.push("/admin/recipes")
                                        }}
                                    >Back</button>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default DetailRecipe;