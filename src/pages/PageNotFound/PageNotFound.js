import React from 'react';

const PageNotFound = () => {
    return (
        <div className='container mx-auto h-screen flex justify-center items-center mt-20'>

            <div className="px-40 py-20 bg-white rounded-md shadow-lg flex-shrink-0 shadow-indigo-500/40">
                <div className="flex flex-col items-center">
                    <h1 className="font-bold text-blue-500 text-5xl">404</h1>

                    <h6 className="mb-2 text-xl font-bold text-center text-gray-800 md:text-xl">
                        <span className="text-red-500">Oops!</span> Page not found
                    </h6>
                    <p className="text-center text-gray-500 md:text-lg">
                        The page you're looking for doesn't exist.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;