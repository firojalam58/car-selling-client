import React from 'react';
import Product from '../Product/Product';
import Products from '../Product/Products/Products';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Product></Product>
            <Products></Products>
        </div>
    );
};

export default Home;