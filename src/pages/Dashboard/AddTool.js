import React from 'react';
import { useForm } from "react-hook-form";

const AddTool = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/tool`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };


    return (
        <div className='container mx-auto p-10'>
            <h2 className='text-center text-3xl text-red-800'>Please add a tool</h2>
            <form className='grid grid-cols-1 px-20 bg-base-200 p-5' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("picture")} />
                <input type="submit" className='btn btn-primary' value="Add Service" />
            </form>
        </div>
    );
};

export default AddTool;