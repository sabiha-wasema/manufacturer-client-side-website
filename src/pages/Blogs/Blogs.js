import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='my-10'>
            <div>
                <h2 className='text-center text-lg font-semibold'>Difference between javascript and nodejs ?</h2>
                <div className='ans-container'>
                    <p className='text-center font-semibold'>Node js</p>
                    <p className='text-justify'>Node js is not a language. it is a cross-platform, open-source, server side runtime environment. it facilitates javascript to be rin on a server (out side of the browser). node.js can run on various platform - windows, linux, mac os, etc</p>
                    <p className='text-center font-semibold'>Java Script</p>
                    <p className='text-justify'>Javascript is a lightweight, object-oriented scripting language. it is used to build dynamic html pages with interactive efforts on a webpage, mobile application, games, server applications etc.</p>
                </div>
            </div>
            <div>
                <h2 className='text-center text-lg font-semibold mt-8'>When should you use nodejs and when should you use mongodb ?</h2>
                <div className='ans-container'>
                    <p className='text-center font-semibold'>Node js</p>
                    <p className='text-justify'>If there is a large application and there is heavy load on the input output or scalable network then it is better to use node js.</p>
                    <p className='text-center font-semibold'>MongoDB</p>
                    <p className='text-justify'>When a website has user created or different types of products and they need to be loaded and displayed on the website then they need space to keep them which is called database. mongodb is a kind of nosql database, where we can keep the data a lot like json format.</p>
                </div>
            </div>
            <div>
                <h2 className='text-center text-lg font-semibold mt-8'>Differences between sql and nosql databases ?</h2>
                <div className='ans-container'>
                    <p className='text-center font-semibold'>sql</p>
                    <p className='text-justify'>Everything is already structured in the sql database. There will be things called property, they are given. And sql makes it a little harder to change these things.</p>
                    <p className='text-center font-semibold'>nosql</p>
                    <p className='text-justify'>On the other hand mongodb is a little more flexible than sql. If I want, I can add property in the product first, then I can add it later. We can also keep all the things in the form of a collection.</p>
                </div>
            </div>
            <div>
                <h2 className='text-center text-lg font-semibold mt-8'>What is the purpose of jwt and how does it work ?</h2>
                <div className='ans-container '>
                    <p className='text-justify'>The purpose of jwt is to make the website more secure. Here's how it works: After a user logs in, jwt gives him a token that is saved in the user's local storage or cookies, and the next time the user logs in again, the server can see who the user is by looking at that token. If someone else tries to steal the user's token and use it, the website will send him to the login page.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;

