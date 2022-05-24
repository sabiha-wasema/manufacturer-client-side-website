import React, { useEffect, useState } from 'react';
import Tool from '../Tool/Tool';

const AllTools = () => {

    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setTools(data));
    }, [])

    return (
        <div>
            <div>
                <div className='container mx-auto mb-10 px-20 mt-20 flex justify-center items-center'>
                    <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-7'>
                        {
                            tools.slice(6, 9).map(tool => <Tool
                                key={tool.id}
                                tool={tool}
                            ></Tool>)
                        }

                    </div>
                </div>

            </div>
        </div>
    );
};

export default AllTools;