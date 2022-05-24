import React from 'react';

const ContactUs = () => {
    return (
        <div className='bg-base-200 px-10 py-14 '>
            <div className='text-center pb-14'>
                <p className='lg:text-4xl text-2xl font-bold'>
                    Contact Us
                </p>
                <h1 className='lg:text-3xl text-2xl'>Stay connected with us</h1>
            </div>
            <div className='grid grid-cols-1 justify-items-center gap-5'>
                <input
                    type='text'
                    placeholder='Email Address'
                    className='input w-full max-w-md'
                />
                <input
                    type='text'
                    placeholder='Topics'
                    className='input w-full max-w-md'
                />
                <textarea
                    className='textarea w-full max-w-md'
                    placeholder='Your message'
                    rows={6}
                ></textarea>
                <button className='bg-primary px-5 py-2 rounded-lg text-xl font-semibold text-black '>Submit</button>
            </div>
        </div>
    );
};

export default ContactUs;