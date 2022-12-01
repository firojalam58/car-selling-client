
import {useQuery} from '@tanstack/react-query'
import toast from 'react-hot-toast';
import { AiFillCheckCircle } from 'react-icons/ai';
const AllSellers = () => {

    const { data: allsellers = [], refetch } = useQuery({
        queryKey: ['allsellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allsellers', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
const handleDelete = id =>{
    fetch(`http://localhost:5000/allsellers/${id}`,{
        method:'DELETE',
    })
    .then(res => res.json())
    .then(data =>{
        if(data.deletedCount >0){
            toast.success('deleted success')
            refetch()
        }
    })
};
const handleVerify = id =>{
    fetch(`http://localhost:5000/allsellers/verify/${id}`,{
        method:'PUT',
    })
    .then(res => res.json())
    .then(data =>{
        if(data.modifiedCount > 0){
            toast.success('Verify Successfully')
            refetch()
        }
    })
}

return (
    <div>
        <h2 className="text-3xl">All Seller</h2>
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allsellers.map((seller, i) => <tr key={seller._id}>
                            <th>{i + 1}</th>
                            <td>{seller.name}</td>
                            <td>{seller.email}</td>
                           { seller?.verify?
                           <td><AiFillCheckCircle className=' text-center text-green-500 mt-2'/> </td>:
                         <td>{seller?.role !== 'admin' && <button  className='btn btn-xs btn-primary'onClick={() => handleVerify(seller._id)}> Verify </button>}</td>
                        }
                            <td><button className='btn btn-xs btn-danger'onClick={() => handleDelete(seller._id)}>Delete</button></td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    </div>
);
};

export default AllSellers;