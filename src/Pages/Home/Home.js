import React from 'react';
import About from '../About/About';
import Product from '../Product/Product';
import Team from '../Team/Team';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Product></Product>
            <About></About>
            <Team></Team>
        </div>
    );
};

export default Home;