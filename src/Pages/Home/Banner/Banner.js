import React from 'react';
import img from '../../../images/banner/slider-3.jpg'
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello Sweet Client</h1>
                        <p className="mb-5">Welcome Our Special Car Service We Provide The Awesome Car.</p>
                        <button className="btn btn-primary">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;