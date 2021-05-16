import React from 'react';
import '../CakeComponent/Style/User/Home.css'
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Home() {

    return (
        <div className="userHome">
            <div className="row">
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
            <br />
            <div className="row homeBody">
                <div className="col-md-3">
                    <div className="homeCategory">
                        <h5>BirthDayCake</h5>
                        <div className="homeSub">
                            <p>hello</p>
                            <p>hello</p>
                            <p>hello</p>
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="homeCategory">
                        <h5>BirthDayCake</h5>
                        <div className="homeSub">
                            <p>hello</p>
                            <p>hello</p>
                            <p>hello</p>
                            <p>hello</p>
                        </div>
                    </div>

                </div>
                <div className="col-md-9">
                    <div className="rowMenu">
                        <h5>Best Seller</h5>
                        <OwlCarousel className="owl-theme" loop margin={10} nav>
                            <div classname="item">
                                <img src="https://i.ytimg.com/vi/EJ5AlErxLWY/maxresdefault.jpg" alt="logo" />
                                <p className="pictrue-title">TenMon</p>
                                <p className="pictrue-money">DonGia<u>đ</u></p>
                                <button type="button" class="btn btn-outline-warning btn-sm">Add To Cart</button>
                            </div>                   
                        </OwlCarousel>
                    </div>
                    <br />
                    <div className="rowMenu">
                        <h5>BirthDay Cake</h5>
                        <OwlCarousel className="owl-theme" loop margin={10} nav>
                            <div classname="item">
                                <img src="https://i.ytimg.com/vi/EJ5AlErxLWY/maxresdefault.jpg" alt="logo" />
                                <p className="pictrue-title">TenMon</p>
                                <p className="pictrue-money">DonGia<u>đ</u></p>
                                <button type="button" class="btn btn-outline-warning btn-sm">Add To Cart</button>
                            </div>                   
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;
