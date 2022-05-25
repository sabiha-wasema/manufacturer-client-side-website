import React, { useEffect, useState } from 'react';
import PurchaseModal from '../PurchaseModal/PurchaseModal';
import Tool from '../Tool/Tool';

const AllTools = () => {
    const [purchase, setPurchase] = useState(null);

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
                                setPurchase={setPurchase}
                            ></Tool>)
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
        </div>
    );
};

export default AllTools;