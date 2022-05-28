import React from 'react';

const Blogs = () => {
    return (
        <div className='my-20 grid lg:grid-cols-3 md:grid-cols-2 container mx-auto gap-4 p-16'>
            <div className='rounded-lg shadow-lg p-4'>
                <h2 className='text-xl font-bold text-red-800 text-center mt-7 px-2'>How will you improve the performance of a React Application?</h2>
                <div className='ans-container'>
                    <p className='text-blue-700 mt-4 mb-5 px-5'>Keeping the component state local where necessary.
                        Memoizing React components to prevent unnecessary re-renders.
                        Code-splitting in React using dynamic import()
                        Windowing or list virtualization in React.
                        Lazy loading images in React.</p>
                </div>
            </div>
            <div className='rounded-lg shadow-lg p-4'>
                <h2 className='text-xl font-bold text-red-800 text-center mt-7 px-2 '>What are the different ways to manage a state in a React application?</h2>
                <div className='ans-container'>
                    <p className='text-blue-700 mt-4 mb-5 px-5'>There are four main types of state need to properly manage in the React applications:
                        1. Local state.
                        2. Global state.
                        3. Server state.
                        4.URL state.</p>
                </div>
            </div>
            <div className='rounded-lg shadow-lg p-4'>
                <h2 className='text-xl font-bold text-red-800 text-xl font-bold text-red-800 text-center mt-7 px-2'>How does prototypical inheritance work?</h2>
                <div className='ans-container'>
                    <p className='text-blue-700 mt-4 mb-5 px-5'>JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.

                        Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values).

                        JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.

                        Today, we want to get you acquainted with prototypal inheritance in JavaScript to get you up to date with the ES6 capabilities.</p>
                </div>
            </div>
            <div className='rounded-lg shadow-lg p-4'>
                <h2 className='text-xl font-bold text-red-800 text-center mt-7 px-2'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                <div className='ans-container '>
                    <p className='text-blue-700 mt-4 mb-5 px-5'>One should never update the state directly because of the following reasons: If you update it directly, calling the setState() afterward may just replace the the state.While a React component can have initial state, the real power is in updating its state — after all, if we didn't need to update the state, the component shouldn't have any state. State is only reserved for data that changes in our component and is visible in the UI. Instead of directly modifying the state using this.</p>
                </div>
            </div>
            <div className='rounded-lg shadow-lg p-4'>
                <h2 className='text-xl font-bold text-red-800 text-center mt-7 px-2'>What is a unit test? Why should write unit tests?</h2>
                <div className='ans-container '>
                    <p className='text-blue-700 mt-4 mb-5 px-5'>Unit testing allows the programmer to refactor code at a later date, and make sure the module still works correctly (i.e. Regression testing). The procedure is to write test cases for all functions and methods so that whenever a change causes a fault, it can be quickly identified and fixed.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;

