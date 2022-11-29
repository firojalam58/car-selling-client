import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthContext/AuthProvider';
import MyProducts from './MyProducts';

const MyProduct = () => {
    const { user } = useContext(AuthContext)
    const [myproduct, setMyProduct] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/addproducts?email=${user?.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyProduct(data)
            })
    }, [])
    return (
        <div>
            {
                myproduct.map(product => <MyProducts
                    key={product._id}
                    category={product}
                ></MyProducts>)
            }
        </div>
    );
};

export default MyProduct;

// const url = http://localhost:5000/products?email=${user?.email}