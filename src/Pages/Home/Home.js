import React from 'react';
import About from '../About/About';
import Advertise from '../Advertise/Advertise';
import Product from '../Product/Product';
import Team from '../Team/Team';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertise></Advertise>
            <Product></Product>
            <About></About>
            <Team></Team>
        </div>
    );
};

export default Home;