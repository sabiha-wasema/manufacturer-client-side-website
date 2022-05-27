import React from 'react';
import Card from '../../Card/Card';
import CustomHook from '../../../CustomHook/CustomHook';
import { Link } from 'react-router-dom';

const HomeTool = () => {
    const [tools, setTools] = CustomHook();
    const firstSixTools = tools.slice(0, 6);

    return (
        <div>
            <div>
                <div className='container mx-auto mb-10'>
                    <h2 className='text-3xl text-center font-bold mb-7'>Tools (Total tools: {tools.length})</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-7 mb-5'>
                        {
                            firstSixTools.map(tool => <Card
                                key={tool.id}
                                tool={tool}

                            ></Card>)
                        }
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <Link
                    className='text-xl  font-semibold bg-primary rounded-md px-4 py-2 text-black text-center'
                    to='/tools'
                >See More</Link>
            </div>
        </div >
    );
};

export default HomeTool;
