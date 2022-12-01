import React from 'react';
import About from '../About/About';
import Product from '../Product/Product';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Product></Product>
            <About></About>
        </div>
    );
};

export default Home;