import React from 'react';
import useTools from '../../Hooks/useTools';

const ManageTools = () => {
    const [tools, setTools] = useTools();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://enigmatic-citadel-64410.herokuapp.com/tool/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = tools.filter(tool => tool._id !== id);
                    setTools(remaining);
                })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2 className='mt-10 mb-7 text-2xl font-bold text-red-800'>Manage Your Items</h2>
            {
                tools.map(tool => <div className='mb-1' key={tool._id}>
                    <div className='flex justify-items-center'>
                        <img className='w-10' src={tool.picture} alt="" />
                        <h5 className='px-10'>{tool.name} <span className='text-bold text-xl text-primary pr-7'>${tool.price}</span><button className='bg-red-600 px-3' onClick={() => handleDelete(tool._id)}>X</button></h5>
                    </div>

                </div>)
            }
        </div>
    );
};

export default ManageTools;