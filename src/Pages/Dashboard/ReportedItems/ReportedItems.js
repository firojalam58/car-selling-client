import {useQuery} from '@tanstack/react-query'
import toast from 'react-hot-toast';
import { AiFillCheckCircle } from 'react-icons/ai';

const ReportedItems = () => {
    const { data: reportproduct = [], refetch } = useQuery({
        queryKey: ['reportproduct'],
        queryFn: async () => {
            const res = await fetch('https://car-selling-server-rho.vercel.app/reportproduct', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
const handleDelete = id =>{
    fetch(`https://car-selling-server-rho.vercel.app/reportproduct/${id}`,{
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
    
return (
    <div>
        <h2 className="text-3xl">All report</h2>
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Id</th>
                        <th>Seller Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reportproduct.map((report, i) => <tr key={report._id}>
                            <th>{i + 1}</th>
                            <td>{report.title}</td>
                            <td>{report._id}</td>
                            <td>{report.sellerName}</td>
                            <td>{report.email}</td>
                          
                            <td><button className='btn btn-xs btn-danger'onClick={() => handleDelete(report._id)}>Delete</button></td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    </div>
);
};

export default ReportedItems;