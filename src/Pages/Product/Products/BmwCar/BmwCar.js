import React from 'react';
import { Link } from 'react-router-dom';

const BmwCar = ({ category }) => {
    const { _id, title, picture, postTime, sellerName, yearOfUse, resalePirce, originalPirce, company, location, description } = category;
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
                        <span className='text-xm'>ResalePirce: {resalePirce}</span>

                    </div>
                </div>
                <div className='text-center'>
                    <Link><button className='btn btn-primary'>Add To Book</button></Link>
                </div>
            </div>
        </div>
    );
};

export default BmwCar;