import React from 'react';
import Blogs from '../Blogs/Blogs';
// import Blog from '../Blog/Blog';
import ContactUs from '../ContactUs';
import Reviews from '../Reviews';
import Testimonials from '../Testimonials';
import Banner from './Banner';
import Tools from './Tools/Tools';

const Home = () => {

    return (
        <div className='px-20'>
            <Banner />
            <Tools />
            <Blogs />
            <Testimonials />
            <ContactUs />



        </div>

    );
};

export default Home;