import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../AuthContext/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const AddProducts = () => {

    const { user } = useContext(AuthContext)
    const date = new Date()
    const postTime = format(date, 'PP')
    const navigate = useNavigate()

    const handleAddToCard = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const category = form.category.value;
        const picture = form.picture.value;
        const originalPrice = form.originalPrice.value;
        const resalePrice = form.resalePrice.value;
        const yearOfUse = form.yearOfUse.value;
        const sellerName = form.sellerName.value;
        const location = form.location.value;
        const description = form.description.value;



        const booking = {
            title,
            category,
            picture,
            originalPrice,
            resalePrice,
            yearOfUse,
            sellerName,
            location,
            description,
            postTime,
            email: user?.email
        }

        fetch('http://localhost:5000/addproducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Product Add confirm')
                    form.reset();
                    navigate('/dashboard/myProducts')
                }
                else {
                    toast.error(data.message)
                }

            })

    }

    return (
        <div>
            <div>
                <h2 className='text-4xl text-center text-orange-500 font-bold my-4'>Add Products</h2>
                <div className='flex justify-center items-center'>
                    <div className='w-96 bg-gray-800 rounded-md p-7'>
                        <form onSubmit={handleAddToCard}>
                            <input type="text" name='title' placeholder="Model" className="input input-sm input-bordered w-full max-w-xs" />
                            <select  name='category' className="select select-sm select-bordered w-full max-w-xs my-2 ">
                                <option disabled selected>Category</option>
                                <option value="GORILLA">Gorilla Car</option>
                                <option value="Bmw">Bmw Car</option>
                                <option value="TESLA">Tesla car</option>
                                <option value="LAMBERGINI">Lambergini car</option>
                            </select>
                            <input  type="text" name='picture' placeholder="Photo Url" className="input  input-sm input-bordered w-full max-w-xs" required />
                            <input  type="text" name='originalPrice' placeholder="OriginalPrice" className=" my-2 input input-sm input-bordered w-full max-w-xs" required />
                            <input type="text" name='resalePrice' placeholder="ResalePrice" className="input input-sm input-bordered w-full max-w-xs"required  />
                            <input type="text" name='yearOfUse' placeholder="Year Of Use" className=" my-2 input input-sm input-bordered w-full max-w-xs" required />
                            <input type="text" name='sellerName' placeholder="Seller Name" className="input input-sm input-bordered w-full max-w-xs"  required/>
                            <input type="text" name='location' placeholder="location" className=" my-2 input input-sm input-bordered w-full max-w-xs" required />
                            <textarea name='description' className="textarea textarea-bordered " cols="42" rows="4" placeholder="description"></textarea>
                            <input type="submit" className='w-full btn bg-gray-600' value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;