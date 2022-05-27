import React from 'react';


const MyItem = ({ filterMyItems, handleDeleteItem }) => {

    const { _id, name, email, price, quantity, supplier } = filterMyItems
    return (
        <div className='table-head border border-slate-400 border-collapse mb-2 py-2 table-auto container mx-auto'>
            <p className=' ml-5 border-l-2 pl-2 border-slate-400 flex'>{_id}</p>
            <p className=' ml-5 border-l-2 pl-2 border-slate-400 flex'>{name}</p>
            <p className=' ml-5 border-l-2 pl-2 border-slate-400 flex'>{email}</p>
            <p className=' ml-5 border-l-2 pl-2 border-slate-400 flex'>{price}</p>
            <p className=' ml-5 border-l-2 pl-2 border-slate-400 flex'>{quantity}</p>
            <p className=' ml-5'>
                <button onClick={() => handleDeleteItem(_id)} className='delete-btn'>Delete</button>
            </p>
        </div>
    );
};

export default MyItem;