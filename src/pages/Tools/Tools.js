import React, { useEffect, useState } from 'react';
import Tool from '../Tool/Tool';
import { Link } from 'react-router-dom';
import PurchaseModal from '../PurchaseModal/PurchaseModal';


const Tools = () => {
    const [purchase, setPurchase] = useState(null);


    const [tools, setTools] = useState([]);
    const firstSixTools = tools.slice(0, 6);

    useEffect(() => {
        fetch('http://localhost:5000/tool')
            .then(res => res.json())
            .then(data => setTools(data));
    }, [])

    return (
        <div id="tools">
            <div>
                <div className='container mx-auto mb-10'>
                    <h2 className='text-3xl text-center font-bold mb-7'>Tools (Total tools: {tools.length})</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-7 mb-5'>
                        {
                            firstSixTools.map(tool => <Tool
                                key={tool._id}
                                tool={tool}
                                setPurchase={setPurchase}
                            > </Tool>)
                        }
                    </div>
                    {
                        purchase && <PurchaseModal
                            purchase={purchase}
                            setPurchase={setPurchase}
                        ></PurchaseModal>
                    }


                </div>
            </div>
            <div className='flex justify-center items-center'>
                <Link
                    className='text-xl  font-semibold bg-primary rounded-md px-4 py-2 text-black text-center'
                    to='/alltools'
                >See More</Link>
            </div>
        </div>
    );
};

export default Tools;