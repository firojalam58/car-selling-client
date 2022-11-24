import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard/ProductCard';
import { Link } from 'react-router-dom';
import './product.css'
const Product = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
                console.log(data);
            })
    }, [])


    return (
        <div>
            <div className='text-5xl text-primary text-center mt-5 mb-5' >
                <h2>Our Products</h2>
            </div>
            <div>
                <div className="navbar bg-base-100 flex justify-center">

                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            {
                                categories.map(category =>
                                    <li
                                        key={category._id}
                                    >
                                        <Link className='text-3xl text-primary' to={`/categories/${category?._id}`}>{category?.category}</Link>
                                    </li>

                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>

            <div className='grid gap-6 grid-cols-1 ml-4 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Product;