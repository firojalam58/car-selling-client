import React from 'react';
import {useQuery} from '@tanstack/react-query'
import toast from 'react-hot-toast';
const AllBuyers = () => {
    const { data: allbuyers = [], refetch } = useQuery({
        queryKey: ['allbuyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allbuyers', {
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
}
return (
    <div>
        <h2 className="text-3xl">All buyer</h2>
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allbuyers.map((buyer, i) => <tr key={buyer._id}>
                            <th>{i + 1}</th>
                            <td>{buyer.name}</td>
                            <td>{buyer.email}</td>
                            <td><button className='btn btn-xs btn-danger'onClick={() => handleDelete(buyer._id)}>Delete</button></td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    </div>
);
};

export default AllBuyers;