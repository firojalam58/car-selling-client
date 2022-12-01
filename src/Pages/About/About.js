import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/banner/toyota1.jpg'
const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">How to buy your car with Bhalogari?</h1>
      <p className="py-6">
            Featured
            November 29, 2022Bhalogari Contents Team
            Most Popular Bikes In Bangladesh
            Most people in Bangladesh, a small but densely populated nation, can travel quickly, easily, and affordably by motorcycle. The country has a substantial motorbike market. It might surprise you to learn that more than fifteen motorcycle manufacturers operate successfully in Bangladesh. But which are the most popular bikes in Bangladesh? Let’s find out..</p>
      <Link to={'/products'}><button className="btn btn-primary">Order Now</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;