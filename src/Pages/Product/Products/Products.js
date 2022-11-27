import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../../AuthContext/AuthProvider';
import AddToCard from '../../AddToCard/AddToCard';
import BmwCar from './BmwCar/BmwCar';
const Products = () => {
    const categories = useLoaderData();
    const [data, setData] = useState(null);
    const { user } = useContext(AuthContext)
    return (
        <div>
            <div className='grid gap-6 grid-cols-1 ml-4 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categories.map(category => <BmwCar
                        key={category?._id}
                        category={category}
                        setData={setData}
                    ></BmwCar>)
                }
            </div>
            <div>
                {
                    data && <AddToCard
                        data={data}
                        user={user}
                    ></AddToCard>
                }
            </div>
        </div>
    );
};

export default Products;