// import React from 'react';
// import { Link } from 'react-router-dom';

// const ProductCard = ({ product }) => {
//     const { _id, title, picture, company, location, description } = product
//     return (
//         <div className='mt-5 mb-5'>
//             <div className="card w-96 bg-base-100 shadow-xl image-full">
//                 <figure><img src={picture} alt="Shoes" /></figure>
//                 <div className="card-body">
//                     <h2 className="text-center text-warning text-5xl">{title}</h2>
//                     <h3 className="text-center text-3xl text-warning">Company: {company}</h3>
//                     <h4 className="text-center text-2xl text-warning">Location: {location}</h4>
//                     <p>{description}</p>
//                     <div className="card-actions justify-center">

//                         <Link to={`/products/${_id}`}>
//                             <button className="btn btn-primary">See Details</button>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductCard;