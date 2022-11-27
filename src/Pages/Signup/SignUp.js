
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import img from '../../images/login/images.avif'
import toast from 'react-hot-toast';
const SignUp = () => {


    const navigate = useNavigate()
    const { createUser, google, updateUser } = useContext(AuthContext)
    const [userEmail, setUserEmail] = useState('')
    const handleSignup = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const role = form.option.value;
        createUser(email, password)
            .then(result => {
                const user = result.user

                const userInfo = {
                    displayName: name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(name, email, role)
                    })

            })
            .catch(error => console.error(error))
    }

    const saveUser = (name, email, role) => {
        const user = { name, email, role }
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setUserEmail(email)
                getToken(email)
            })
    }

    const handleGoogle = () => {
        google()
            .then(result => {
                const user = result.user
                if (user) {
                    navigate('/')

                }
            })
            .catch(error => console.error(error))
    }

    const getToken = email => {
        fetch(`http://localhost:5000/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('accessToken', data.accessToken);
                    toast.success('Signup SuccessFully')
                    navigate('/')
                }
            })
    }

    return (
        <div className="hero my-20">
            <div className="hero-content gap-20 grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className='text-5xl text-center font-bold'>Registration</h1>
                    <form onSubmit={handleSignup} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="FirstName"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Are you seller or buyer?
                            </label>

                            <select
                                name="option"
                                className="select select-bordered w-full max-w-xs"

                            >
                                <option disabled selected>Who shot first?</option>
                                <option value="Buyer">Buyer</option>
                                <option value="Seller">Seller</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center'>All ready have an account <Link to={'/login'} className=' font-bold text-orange-500'>Login</Link></p>
                    <button onClick={handleGoogle} className='btn mt-4 btn-success mx-5'><FaGoogle></FaGoogle> Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;