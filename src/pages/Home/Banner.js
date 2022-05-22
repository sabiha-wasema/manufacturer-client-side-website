import React from 'react';
import HeroImage from "../../assets/images/Hero.png"

const Banner = () => {
    return (

        <div class="hero min-h-screen bg-base-100 lg:px-12 lg:mt-12 sm:mt-9 ">
            <div class="hero-content flex-col lg:flex-row sm:p-4">
                <div>
                    <p className='text-xl font-bold'>“Best Quality”</p>
                    <h1 class="text-4xl font-bold max-w-xl text-yellow-500 mt-4 ">LEADING PAINT BRUSH MANUFACTURER. <span className='text-rose-600'>Since 2000,</span></h1>
                    <p class="py-6  max-w-xl">Professional Paint brushes produce Have Own factory and high quality Paint brush manufacturer supplier and manufacturer for 20 years.
                        Our company shows Top Brushes manufacturer in Bangladesh.</p>
                    <button class="btn btn-warning">Contact</button>
                </div>
                <div className='sm:mt-4'>
                    <img src={HeroImage} class="max-w-sm sm:h-[60vh] h-[60vh] w-full rounded-lg" alt="" />
                </div>

            </div>
        </div>

    );
};

export default Banner;