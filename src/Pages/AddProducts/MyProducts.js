import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../AuthContext/AuthProvider';

const MyProducts = ({ category, setData,refetch }) => {

    const { _id, title,advertise, picture, postTime, sellerName, yearOfUse, resalePrice, originalPrice, company, location, description } = category;
    const { loading } = useContext(AuthContext)

    const handleDelete = id => {
        const url = `https://car-selling-server-rho.vercel.app/addproducts/${id}`

        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount >0){
                    toast.success('deleted successfully');
                    refetch();
                }
            })
    }
    const handleAdvertise = id =>{
        fetch(`https://car-selling-server-rho.vercel.app/advertiseproduct/${id}`,{
            method:'PUT'
        })
        .then (res=> res.json())
        .then (data => {
            if(data.modifiedCount > 0){
                toast.success('This Product Advertise is Start');
                refetch()
            }
            
        })
    }
    return (

        <div>
            <div className="flex flex-col mb-5 ml-5 max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">

                <div>
                    <img src={picture} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                    <p className="text-sm dark:text-gray-400">{description}</p>
                </div>
                <div className="flex space-x-4">
                    <img alt="" src={picture} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                    <div className="flex flex-col space-y-1">
                        <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">Sellar Name:{sellerName}</a>
                        <span className="text-xm dark:text-gray-400">Model Name: {title}</span>
                        <span className="text-xm dark:text-gray-400">Post Time: {postTime}</span>
                        <span className=" text-xm dark:text-gray-400">Use: {yearOfUse} Years</span>
                        <span className=" text-xm dark:text-gray-400">Location: {location}</span>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between">

                    <div className="flex space-x-2 text-sm dark:text-gray-400">
                        <span className='text-xm'>OriginalPirce:{originalPrice}</span>
                        <span className='text-xm'>ResalePirce: {resalePrice}</span>

                    </div>
                </div>
                <div className='text-center'>
                    <button className='btn w-60 font-bold mt-3' onClick={() => handleDelete(_id)}>Delete</button>
                    {
                        advertise? <button className='btn btn-primary'>Advertised</button>
                        :
                        <button className='btn w-60 font-bold mt-3' onClick={() => handleAdvertise(_id)}>Advertise</button>
                    }
                </div>
            </div>
        </div >
    );
};

export default MyProducts;