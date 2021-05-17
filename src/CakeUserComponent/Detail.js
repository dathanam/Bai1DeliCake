import React from 'react';
import '../CakeComponent/Style/NewCake.css'
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Detail() {

    return (
        <div className="detail">
            <div className="row rowCake">
                <div className="col-7">
                    <div>
                        <div className="row avata">
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
                </div>
                <div className="col-5">
                    <div className="cakeBody">
                        <h1>Name</h1>
                        <p>16cm x 16cm</p>
                        <h5>Amount</h5>
                        <br />
                        <h3 className="PictrueMoney">$100</h3>
                        <br />
                        <h4>Product Detail</h4>
                        <div className="row">
                            <div className="col-12">
                                <p>The href attribute requires a valid value to be accessible.
                                    Provide a valid, navigable address as the href value</p>
                            </div>
                        </div>
                        <br />
                        <div className="btnCake">
                            <button type="button" class="btn btn-outline-warning btn-sm">Add To Cart <i class="fas fa-cart-plus"></i></button>
                        </div>

                    </div>

                </div>
            </div>
            <div className="otherproducts">
            <h4>You might also like there</h4>
                <OwlCarousel className="owl-theme" loop margin={10} items={5} nav>
                    <div classname="item">
                    <img src="https://th.bing.com/th/id/Rf9d392d758a9039d082850eded33ec79?rik=seEtV8YA5vY9sA&pid=ImgRaw" alt="logo" />
                        <h6 className="detailPictrueTitle">TenMon</h6>
                        <p className="detailPictrueMoney">123<u>đ</u></p>
                        <button type="button" class="btn btn-outline-warning btn-sm"><i class="fas fa-cart-plus"></i></button>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    );
}
export default Detail;
