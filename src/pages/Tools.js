import React from 'react';
import Card from '../Pages/Card/Card';
import CustomHook from '../CustomHook/CustomHook';

const Tools = () => {

    const [tools, setTools] = CustomHook();
    const firstSixTools = tools.slice(6, 12);
    return (
        <div>
            <div>
                <div className='container mx-auto mb-10 px-20 mt-7 flex justify-center items-center h-screen'>
                    <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-7'>
                        {
                            firstSixTools.map(tool => <Card
                                key={tool.id}
                                tool={tool}
                            ></Card>)
                        }

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Tools;