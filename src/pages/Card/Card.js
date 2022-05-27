import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const { _id, picture, name, description, quantity, price } = props.tool;
    return (
        <div className='shadow-lg rounded-2xl w-{80px} mb-4 bg-base-200 p-6'>
            <div className='flex-shrink-0'>
                <img src={picture} alt="" />
            </div>
            <div className='text-center font-mono my-6'>
                <h3 className='my-4'><span className='font-bold'>Name:</span> {name}</h3>
                <p className='message'><span className='font-bold'>description:</span> {description} </p>
            </div>
            <div>
                <h5 className='font-bold'>Minimum Order Quantity: <span>{quantity}</span>
                </h5>
                <p>Available Quantity: {quantity}</p>
                <p>Price: {price}</p>
            </div>
            <div className='flex justify-center items-center mt-5'>
                <Link to="/purchase">
                    <button className='btn btn-primary mb-3 px-3'>Purchase</button>
                </Link>
            </div>
        </div >
    );
};

export default Card;