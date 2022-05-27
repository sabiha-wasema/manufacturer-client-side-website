import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Tool from '../Tool/Tool';

const Tools = () => {

    const navigate = useNavigate()

    const navigateToAllTools = () => {
        navigate('/tools')
    }
    const [tools, setTools] = useState([]);
    // const top6tools = tools.slice(0, 6)

    useEffect(() => {
        fetch('http://localhost:5000/tool')
            .then(res => res.json())
            .then(data => setTools(data));
    }, [])
    return (
        <div>
            <div className='container mx-auto mb-10'>
                <h2 className='text-3xl text-center font-bold mb-7'>Tools (Total tools: {tools.length})</h2>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-7 mb-5'>
                    {
                        tools.map(tool => <Tool
                            key={tool._id}
                            tool={tool}
                        >
                        </Tool>)
                    }
                </div>
                <div className='flex justify-center items-center'>
                    <button onClick={navigateToAllTools} className='btn btn-primary'>Manage Tools</button>
                </div>
            </div>
        </div>
    );
};

export default Tools;