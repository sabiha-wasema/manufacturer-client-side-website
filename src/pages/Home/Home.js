import React from 'react';
import Blog from '../Blog/Blog';
import ContactUs from '../ContactUs';
import Testimonials from '../Testimonials';
import Banner from './Banner';
import HomeTool from './HomeTool/HomeTool';

const Home = () => {

    return (
        <div className='px-20'>
            <Banner />
            <HomeTool />
            <Blog />
            <Testimonials />
            <ContactUs />



        </div>

    );
};

export default Home;