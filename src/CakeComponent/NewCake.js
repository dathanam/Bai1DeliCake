import React from 'react';
import './Style/NewCake.css';

function NewCake() {

    return (
        <div className="newCake">
            <div className="row rowCake">
                <div className="col-7">
                    <div>
                        <div className="row avata">
                            <div className="col-12">
                                <img className="img-fluid" src="https://th.bing.com/th/id/Rf9d392d758a9039d082850eded33ec79?rik=seEtV8YA5vY9sA&pid=ImgRaw" alt="logo" />
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
                        <h1>Name</h1>
                        <p>size: 16cm x 16cm</p>
                        <select>
                            <option>Birthday Cake</option>
                            <option>Cheese Cake</option>
                            <option>cake</option>
                        </select>
                        <br />
                        <br />
                        <h3>Price: $100</h3>
                        <br />
                        <h4>Product Detail</h4>
                        <div className="row">
                            <div className="col-12">
                                <textarea className="textCake"></textarea>
                            </div>
                        </div>
                        <br />
                        <div className="btnCake">
                            <button className="btnAddCakeSave">Save</button>
                            <button className="btnAddCakeCancel">Cancel</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default NewCake;
