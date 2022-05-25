import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Tool = ({ tool, setPurchase }) => {

    const { _id, picture, name, description, minimumquantity, availablequantity, price
    } = tool;

    const navigate = useNavigate();

    const navigateToToolDetail = id => {
        navigate(`/tool/${id}`);
    }

    return (
        <div className='shadow-lg rounded-2xl w-{80px} mb-4 bg-base-200 p-6'>
            <div className='flex-shrink-0'>
                <img className='w-[400px] rounded-lg' src={picture} alt="" />
            </div>
            <div className='text-center font-mono my-6'>
                <h3 className='my-4'><span className='font-bold'>Name:</span> {name}</h3>
                <h4 className='message'><span className='font-bold'>Description:</span> {description} </h4>
            </div>
            <div className='text-center px-5'>
                <h5 className='font-semibold'>Minimum Order Quantity: <span>{minimumquantity}</span>
                </h5>
                <p>Available Quantity: {availablequantity}</p>
                <h4><span className='text-xl font-semibold text-warning'>Price:</span> {price}</h4>
            </div>
            <div className='flex justify-center items-center mt-5'>
                {/* <Link to="/purchase">
                    <button onClick={() => navigateToToolDetail(_id)} className='btn btn-primary mb-3 px-3'>Purchase</button>
                </Link> */}

                <button onClick={() => navigateToToolDetail(_id)} className='btn btn-primary mb-3 px-3'>Purchase</button>

                {/*  <label for="purchase-modal" onClick={() => setPurchase(tool)} class=" btn btn-primary mb-3 px-3">Purchase</label>
 */}
            </div>
        </div >
    );
};

export default Tool;