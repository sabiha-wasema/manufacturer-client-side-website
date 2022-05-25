import React from 'react';
import Blog from '../Blog/Blog';
import ContactUs from '../Home/ContactUs';
import Testimonials from '../Home/Testimonials';
import Banner from '../Home/Banner';
import Tools from '../Tools/Tools';


const Home = () => {

    return (
        <div className='px-20'>
            <Banner />
            <Tools></Tools>
            <Blog />
            <Testimonials />
            <ContactUs />
        </div>

    );
};

export default Home;