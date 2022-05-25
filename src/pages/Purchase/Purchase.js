
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';



const Purchase = () => {
    const { toolId } = useParams();
    const [tool, setTool] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/tool/${toolId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data));
    }, [])
    return (
        <div>
            <div className='hero min-h-screen bg-base-200 lg:px-12  sm:mt-9 '>
                <div className="hero-content flex-col lg:flex-row sm:p-4">
                    <div className='flex-shrink-0 mr-10'>
                        <img className='w-[400px] rounded-lg' src={tool.picture} alt="" />
                    </div>
                    <div className='px-7'>
                        {/* <p>Id: {toolId}</p> */}
                        <div>
                            <h2 className='font-italic text-2xl text-center font-semibold mb-3 text-red-700'>{tool.name}</h2>
                            <p className=''><span className='font-bold'>Price: $</span> <span className="2xl text-red-600 ">{tool.price}</span></p>
                            <p className=' text-xl font-semibold'><small>{tool.description}</small></p>
                            <p>Quantity:  <span className='item-quantity'>{
                                tool.quantity ? tool.quantity : "Sold out"
                            }
                            </span>
                            </p>
                            <p className='mb-3'><span className='font-bold'>Supplier Name:</span> <span className='text-red-600'>{tool.supplier}</span></p>
                            <button className='px-4 text-black py-2 bg-primary rounded text-center'>Delivered</button>
                        </div>
                    </div>

                </div >
            </div>
            <div className='text-center mt-5'>

                <div className="mt-4  text-center">
                    <div className='mb-2'>
                        <Link to={`/checkout/${toolId}`}>
                            <button className='btn btn-dark'>Proceed Checkout</button>
                        </Link>
                    </div>

                    <div >
                        <Link to="/manageproduct">
                            <button className='btn btn-dark'>Manage Product</button>
                        </Link>
                    </div>
                </div>

            </div>


        </div >

    );
};

export default Purchase;