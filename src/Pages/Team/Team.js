import React from 'react';
import img1 from '../../images/team/ava-1.c185d7723fe40ec46830.jpg'
import img2 from '../../images/team/ava-2.1442075049ece43143f2.jpg'
import img3 from '../../images/team/ava-3.11e918c656d0c7851624.jpg'
import img4 from '../../images/team/ava-4.5f15524f7b3f80a834df.jpg'
const Team = () => {
    return (
        
        <div>
             <div>
                <h2 className='text-6xl text-center mb-5 mt-5 text-primary'>Our Team Member</h2>
            </div>
        <div className='grid gap-4 grid-cols-1  md:grid-cols-2 lg:grid-cols-4 mb-5'>
           
                <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img1} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Kuddus Khan!</h2>
                <p>Team members may work in guest services, with food, or with customers. In this position, you</p>
                <div className="card-actions text-center">
                <button className="btn btn-primary">Contract Now</button>
                </div>
            </div>
            </div>
                <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img2} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Akkas Ali</h2>
                <p>you may greet customers, clean up after them, or perform other duties related to customer service.</p>
                <div className="card-actions">
                <button className="btn btn-primary">Contract Now</button>
                </div>
            </div>
            </div>
            <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img3} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Jorina Khatun</h2>
                <p>Team members may work in guest services, with food, or with customers. In this position, you </p>
                <div className="card-actions">
                <button className="btn btn-primary">Contract Now</button>
                </div>
            </div>
            </div>
            <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img4} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Rokeya</h2>
                <p>A team member is an employee who works in a group or team, like those who work in restaurants, retail, and hospitality.</p>
                <div className="card-actions">
                <button className="btn btn-primary">Contract Now</button>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Team;