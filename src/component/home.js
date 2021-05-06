import React from 'react';
import HeaderSale from '../component/HeaderSale';
import Carousel from '../component/carousel';
import BodySale from '../component/BodySale';

function home() {
    return (
        <div>
            <HeaderSale />
            <Carousel />
            <h2 className="ngan">Cart</h2>
            <BodySale />
        </div>
    );
}

export default home;