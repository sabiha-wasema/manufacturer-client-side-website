import React from 'react';
import UseInventories from '../Hooks/UseInventories';

const CustomerInfo = () => {
    const [inventories, setInventories] = UseInventories()
    const products = inventories.length
    return (
        <div className='pt-8'>
            <h2 className='text-xl font-bold text-center text-slate-700 mb-5 font-serif'>Others Info</h2>

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-10 lg:py-16">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="text-center">
                        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-100 sm:w-12 sm:h-12">
                            <svg
                                className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                        <h6 className="text-4xl font-bold text-blue-500">
                            135
                        </h6>
                        <p className="mb-2 font-bold text-md">Supplier</p>
                        <p className="text-gray-700">
                            So far 135 suppliers have joined us. Contact us if you would like to join.
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-100 sm:w-12 sm:h-12">
                            <svg
                                className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                        <h6 className="text-4xl font-bold text-blue-500">
                            1.5K
                        </h6>
                        <p className="mb-2 font-bold text-md">Users</p>
                        <p className="text-gray-700">
                            We are always providing our best service to this huge number of users.  We hope to be able to provide such services in the future.
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-100 sm:w-12 sm:h-12">
                            <svg
                                className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                        <h6 className="text-4xl font-bold text-blue-500">531</h6>
                        <p className="mb-2 font-bold text-md">Subscribers</p>
                        <p className="text-gray-700">
                            We keep an eye on our subscribers and always send them various offers through newsletters.
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-100 sm:w-12 sm:h-12">
                            <svg
                                className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                        <h6 className="text-4xl font-bold text-blue-500">{products}</h6>
                        <p className="mb-2 font-bold text-md">Products</p>
                        <p className="text-gray-700">
                            We always try to keep updated bicycles in stock and hope you can buy bicycles from us at affordable prices.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerInfo;