import React, { useContext } from 'react';
import { AuthContext } from '../../../../AuthContext/AuthProvider';

const BmwCar = ({ category, setData }) => {


    const { _id, title, picture, postTime, sellerName, yearOfUse, resalePrice, originalPirce, company, location, description } = category;
    const { loading } = useContext(AuthContext)

    const handleReport = id =>{
        fetch(`https://car-selling-server-rho.vercel.app/reportproduct/${id}`,{
            method:'PUT'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
            }

    return (
        <div>
            <div className="flex flex-col mb-5 ml-5 max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">

                <div>
                    <img src={picture} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                    <h2 className="mb-1 text-xl font-semibold">{title}</h2>
                    <p className="text-sm dark:text-gray-400">{description}</p>
                </div>
                <div className="flex space-x-4">
                    <img alt="" src={picture} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                    <div className="flex flex-col space-y-1">
                        <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">Sellar Name:{sellerName}</a>
                        <span className="text-xm dark:text-gray-400">Post Time: {postTime}</span>
                        <span className=" text-xm dark:text-gray-400">Use: {yearOfUse} Years</span>
                        <span className=" text-xm dark:text-gray-400">Location: {location}</span>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between">

                    <div className="flex space-x-2 text-sm dark:text-gray-400">
                        <span className='text-xm'>OriginalPirce:{originalPirce}</span>
                        <span className='text-xm'>ResalePirce: {resalePrice}</span>

                    </div>
                </div>
                <div className='text-center '>
                    <label
                        onClick={() => setData(category)}
                        htmlFor="booking-modal"
                        className="btn btn-primary">Book now
                    </label>
                    <button onClick={()=> handleReport(_id)} className='btn btn-primary ml-3'>Report</button>
                </div>
            </div>
        </div>
    );
};

export default BmwCar;