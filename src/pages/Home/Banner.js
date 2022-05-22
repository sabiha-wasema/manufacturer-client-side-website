import React from 'react';
import HeroImage from "../../assets/images/Hero.png"

const Banner = () => {
    return (

        <div class="hero min-h-screen bg-base-100 lg:px-12  sm:mt-9 ">
            <div class="hero-content flex-col lg:flex-row sm:p-4">
                <div >
                    <p className='text-xl font-bold' data-aos="fade-down-right"
                        data-aos-duration='1000'
                        data-aos-delay='300'>“Best Quality”</p>
                    <h1 class="text-4xl font-bold max-w-2xl text-yellow-500 mt-2 " data-aos="fade-down-right"
                        data-aos-delay='400'
                        data-aos-duration='900'>LEADING PAINT BRUSH MANUFACTURER. <span className='text-rose-600'>Since 2000,</span></h1>
                    <p class="py-6 max-w-3xl" data-aos="fade-down-right"
                        data-aos-delay='600'
                        data-aos-duration='800'>Professional Paint brushes produce Have Own factory and high quality Paint brush manufacturer supplier and manufacturer for 20 years.
                        Our company shows top Brushes manufacturer in Bangladesh.</p>
                    <button class="btn uppercase bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  font-bold" data-aos='zoom-in'
                        data-aos-delay='1300'>Contact</button>
                </div>

                <img src={HeroImage} class="max-w-sm sm:h-full h-[60vh] w-full rounded-lg" alt="" />

            </div >
        </div >

    );
};

export default Banner;