import React, { useState, useEffect } from 'react';
import './Style/DetailRecipe.css'
import { axios } from '../component/axios'
import Axios from 'axios'
import { useHistory } from "react-router-dom";

function DetailRecipe() {
    return (
        <div className="detailRecipe">
            <div className="boderDetailRecipe">
                <div className="row">
                    <h2>Name Cake</h2>
                </div>
                <div className="row">
                    <div className="col-6 imgDetail">
                        <div className="row">
                            <div id="demo" className="carousel slide" data-ride="carousel">
                                <ul className="carousel-indicators">
                                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                                    <li data-target="#demo" data-slide-to="1"></li>
                                    <li data-target="#demo" data-slide-to="2"></li>
                                </ul>


                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="img-fluid" src="https://th.bing.com/th/id/Rf9d392d758a9039d082850eded33ec79?rik=seEtV8YA5vY9sA&pid=ImgRaw" alt="logo" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="img-fluid" src="https://th.bing.com/th/id/Rf9d392d758a9039d082850eded33ec79?rik=seEtV8YA5vY9sA&pid=ImgRaw" alt="logo" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="img-fluid" src="https://th.bing.com/th/id/Rf9d392d758a9039d082850eded33ec79?rik=seEtV8YA5vY9sA&pid=ImgRaw" alt="logo" />
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
                        <div className="row abcd">
                            <div className="col-3 imgdetaill">
                                <img className="img-fluid" src="https://th.bing.com/th/id/Rf9d392d758a9039d082850eded33ec79?rik=seEtV8YA5vY9sA&pid=ImgRaw" alt="logo" />
                            </div>
                            <div className="col-3 imgdetaill">
                                <img className="img-fluid" src="https://th.bing.com/th/id/Rf9d392d758a9039d082850eded33ec79?rik=seEtV8YA5vY9sA&pid=ImgRaw" alt="logo" />
                            </div>
                            <div className="col-3 imgdetaill">
                                <img className="img-fluid" src="https://th.bing.com/th/id/Rf9d392d758a9039d082850eded33ec79?rik=seEtV8YA5vY9sA&pid=ImgRaw" alt="logo" />
                            </div>
                            <div className="col-3 imgdetaill">
                                <img className="img-fluid" src="https://th.bing.com/th/id/Rf9d392d758a9039d082850eded33ec79?rik=seEtV8YA5vY9sA&pid=ImgRaw" alt="logo" />
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <h4>Ingredients</h4>
                        <div className="bodyIngredients">
                            <div className="row">
                                <div className="col-0">
                                    <i className="fas fa-hand-point-right" />
                                </div>
                                <div className="col-11">
                                    <h6>The next generation</h6>
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
                            <p><h6>Step 1</h6>The next generation of our icon library</p>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-0">
                            <i className="fas fa-hand-point-right" />
                        </div>
                        <div className="col-11">
                            <p><h6>Step 2</h6>The next generation of our icon library he next generation of our icon library he next generation of our icon library</p>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default DetailRecipe;