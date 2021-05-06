import React from 'react';
import './Style/Footer.css'

function Footer() {
    return (

        <div className="footer">
            <div className="row">
                <div className="col-md-4">
                    <h4>Contact</h4>
                    <p>Address: Google Maps location: The 1985 Cafe</p>
                    <p>Opening hours: 9 AM - 10 PM</p>
                    <p>Hotline: 19001888</p>
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <i className="fab fa-twitter-square"></i>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-instagram"></i>
                </div>
            </div>
        </div>

    );
}

export default Footer;