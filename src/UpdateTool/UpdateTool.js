import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import './UpdateInventory.css'
import toast from 'react-hot-toast';
// import { nameSliceText } from '../Utilites/Utilites';


const UpdateTool = () => {
    const { toolId } = useParams()
    const [tool, setTool] = useState({})
    const [isReload, setIsReload] = useState(false)
    const { picture, _id, email, name, description, quantity, price, supplier } = tool;

    useEffect(() => {
        const url = `http://localhost:5000/tool/${toolId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [isReload])

    const handleUpdateQuantity = event => {
        event.preventDefault()
        const quantity = event.target.quantity.value
        const url = `http://localhost:5000/tool/${toolId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ quantity })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setIsReload(!isReload)
                toast.success("Quantity Updated Successfully!!")
                event.target.reset()
            })
    }

    const handleDeliveryButton = async () => {
        const url = `http://localhost:5000/delivery/${toolId}`;
        await fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ quantity })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setIsReload(!isReload)
                toast.success("Delivery Success!!")
            })
    }
    return (
        <div className='mt-20 container mx-auto bg-base-200'>
            <div className='mt-20 w-full lg:flex lg:justify-items-center px-20'>
                <div className='flex justify-items-center'>
                    <img src={picture} alt="" />
                </div>
                <div className='flex justify-center '>
                    <div className=' px-20 list-none'>
                        <h1 className='text-2xl text-center mb-4 text-red-800 font-bold'>Product Details</h1>
                        <li><span className='font-bold'>Name: </span>{name}</li>
                        <li className='w-96 text-justify'><span className='font-bold'>Description:</span> {description}</li>
                        <li><span className='font-bold'>In Stock:</span> <span className='text-lg text-blue-600'>{quantity}</span></li>
                        <li><span className='font-bold'>Supplier:</span> {supplier}</li>
                        <li><span className='font-bold'>Price: $</span> <span className='text-lg text-blue-600'>{price}</span> </li>
                    </div>
                </div>
            </div>

            <div className='text-center my-4'>
                <button onClick={handleDeliveryButton} className='submit-btn-style btn-primary px-4 py-2  rounded-lg'>Delivered</button>
            </div>

            <form onSubmit={handleUpdateQuantity} className='text-center bg-base-200 mb-7'>
                <input className='stock-input-style px-4' type="number" name="quantity" min={1} required placeholder='Quantity' />
                <input className='submit-btn-style btn-primary px-4 py-2 rounded-lg' type="submit" value="Update Stock" />
            </form>
        </div>
    );
};

export default UpdateTool;