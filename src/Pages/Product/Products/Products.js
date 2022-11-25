import React from 'react';
import { useLoaderData } from 'react-router-dom'
import BmwCar from './BmwCar/BmwCar';
const Products = () => {
    const categories = useLoaderData();
    return (
        <div className='grid gap-6 grid-cols-1 ml-4 md:grid-cols-2 lg:grid-cols-3'>
            {
                categories.map(category => <BmwCar
                    key={category?._id}
                    category={category}
                ></BmwCar>)
            }
        </div>
    );
};

export default Products;