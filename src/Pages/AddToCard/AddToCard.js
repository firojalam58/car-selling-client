import React from 'react';

const AddToCard = ({ data, user }) => {
    // const { user, email, } = user
    console.log(user);
    const { location, resalePirce, title, picture } = data;
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const price = form.price.value;
        const title = form.title.value;
        const names = form.names.value;
        const location = form.location.value;
        const phone = form.phone.value;

        const booking = {
            email,
            price,
            location,
            names,
            phone,
            title,
            image: data.picture
        }
        console.log(booking);


        fetch('http://localhost:5000/bookings', {
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
                    setData(null)
                    toast.success('booking confirm')
                }
                else {
                    toast.error(data.message)
                }

            })


    }


    return (
        <div>
            <>
                <input type="checkbox" id="booking-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold">{location}</h3>
                        <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 mt-10'>
                            <input name='price' type="text" disabled defaultValue={resalePirce} className="input w-full input-bordered " />
                            <input name='title' type="text" disabled defaultValue={title} className="input w-full input-bordered " />
                            <input name="names" disabled defaultValue={user?.displayName} type="text" placeholder="Your Name" className="input w-full input-bordered" />
                            <input name="email" disabled defaultValue={user?.email} type="email" placeholder="Email Address" className="input w-full input-bordered" />
                            <input name="location" type="text" placeholder="Location" className="input w-full input-bordered" />
                            <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                            <br />
                            <input className='btn btn-accent w-full' type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </>
        </div>
    );
};

export default AddToCard;