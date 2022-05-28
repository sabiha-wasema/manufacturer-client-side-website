import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Reviews = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `https://enigmatic-citadel-64410.herokuapp.com/review`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result);
                if (result.insertedId) {
                    toast.success('Review Inserted');
                    reset();
                }
                else {
                    toast.error('Please Try Again')
                }
            })
    };

    return (
        <div className='container mx-auto mt-20'>
            <h2 className='text-center text-3xl text-red-800'>Please add a tool</h2>
            <form className='grid grid-cols-1 px-20 bg-base-200 p-5' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input type="submit" className='btn btn-primary' value="Add Review" />
            </form>

        </div>
    );
};

export default Reviews;