import React from 'react';
import HeroImage from "../../assets/images/Hero.png"

const Banner = () => {
    return (

        <div class="hero min-h-screen bg-base-100 lg:px-12 lg:mt-16 sm:mt-9 p-4">
            <div class="hero-content flex-col lg:flex-row ">
                <div>
                    <h1 class="text-4xl font-bold max-w-xl">LEADING PAINT BRUSH MANUFACTURER.. Since 2000,</h1>
                    <p class="py-6  max-w-xl">Professional Paint brushes produce Have Own factory and high quality Paint brush manufacturer supplier and manufacturer for 20 years.
                        Our company shows Top Brushes manufacturer in Bangladesh.</p>
                    <button class="btn btn-primary">Contact</button>
                </div>
                <img src={HeroImage} class="max-w-sm h-[60vh] w-full" alt="" />

            </div>
        </div>

    );
};

export default Banner;