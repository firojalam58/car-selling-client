import React, { useContext } from 'react';
import { AuthContext } from '../../AuthContext/AuthProvider';
import {useQuery} from '@tanstack/react-query'
import MyProducts from './MyProducts';

const MyProduct = () => {
    const { user } = useContext(AuthContext)


    const { data: addproducts = [], refetch } = useQuery({
        queryKey: ['addproducts'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/addproducts?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            {
                addproducts.map(product => <MyProducts
                    key={product._id}
                    category={product}
                    refetch={refetch}
                    
                ></MyProducts>)
            }
        </div>
    );
};

export default MyProduct;
