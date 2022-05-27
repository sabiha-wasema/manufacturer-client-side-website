import React from 'react';
// import Blog from '../Blog/Blog';
import ContactUs from '../ContactUs';
import Testimonials from '../Testimonials';
import Banner from './Banner';
import Tools from './Tools/Tools';

const Home = () => {

    return (
        <div className='px-20'>
            <Banner />
            <Tools />
            {/* <Blog /> */}
            <Testimonials />
            <ContactUs />



        </div>

    );
};

export default Home;