import {useQuery} from '@tanstack/react-query'
import { useContext, useState } from 'react';
import { AuthContext } from '../../AuthContext/AuthProvider';
import AddToCard from '../AddToCard/AddToCard';
import BmwCar from '../Product/Products/BmwCar/BmwCar';

const Advertise = () => {
    const [data, setData] = useState(null);
    const {user} = useContext(AuthContext)
    const { data: advertiseproduct = [], refetch } = useQuery({
        queryKey: ['advertiseproduct'],
        queryFn: async () => {
            const res = await fetch('https://car-selling-server-rho.vercel.app/advertiseproduct', {
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
            <h2 className='text-5xl text-center mt-5 mb-5'>Advertise Products</h2>
         <div className='grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2   gap-3'>
            {
                advertiseproduct.map(adver => <BmwCar
                key={adver._id}
                category={adver}
                setData={setData}

                ></BmwCar>)
            }
           
        </div>
        <div>
           {
            data &&
             <AddToCard setData={setData}
            user={user}
             data={data}
             ></AddToCard>
           }
        </div>
       </div>
    );
};

export default Advertise;