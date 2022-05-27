import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useTools from '../../Hooks/useTools';
import AllItems from '../AllItems/AllItems';

const ManageTools = () => {
    const [tools, setTools] = useTools()

    const handleDeleteItem = _id => {
        const confirm = window.confirm("Are you sure you want to delete?")
        if (confirm) {
            const url = `https://arcane-island-70615.herokuapp.com/products/${_id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success("Item deleted successfully")
                        const remainingItems = tools.filter(tool => tool._id !== _id)
                        setTools(remainingItems)
                    }
                })
        }

    }

    const navigate = useNavigate()
    const navigateToAddItem = () => {
        navigate('/addItem')
    }
    return (
        <div className='mb-14'>
            <div className='my-5'>
                <button onClick={navigateToAddItem} className='add-btn-style'>Add Items</button>
            </div>
            <div>
                <h2 className='text-center text-2xl font-bold my-5'>All Items</h2>
                <div className='table-head container mx-auto'>
                    <p className='text-lg ml-5 font-bold'>ID</p>
                    <p className='text-lg ml-5 font-bold'>Name</p>
                    <p className='text-lg ml-5 font-bold'>Email</p>
                    <p className='text-lg ml-5 font-bold'>Price</p>
                    <p className='text-lg ml-5 font-bold'>Quantity</p>
                    <p className='text-lg ml-5 font-bold'>Action</p>
                </div>
                <div className=''>
                    {
                        tools.map(tool => <AllItems
                            key={tool._id}
                            tool={tool}
                            handleDeleteItem={handleDeleteItem}
                        ></AllItems>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageTools;