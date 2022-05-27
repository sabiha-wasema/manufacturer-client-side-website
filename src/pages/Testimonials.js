import React from 'react';
import { Link } from 'react-router-dom';
import people1 from '../assets/images/people1.png'
import people2 from '../assets/images/people2.png'
import people3 from '../assets/images/people3.png'
import Review from './Review';
const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            review: '',
            location: 'california',
            img: people1
        },
        {
            _id: 2,
            name: 'Winson Herry',
            review: '',
            location: 'california',
            img: people2
        },
        {
            _id: 3,
            name: 'Winson Herry',
            review: '',
            location: 'South Korea',
            img: people3
        },
        {
            _id: 4,
            name: 'Winson Herry',
            review: '',
            location: 'South Korea',
            img: people3
        },
        {
            _id: 5,
            name: 'Winson Herry',
            review: '',
            location: 'South Korea',
            img: people3
        },
        {
            _id: 6,
            name: 'Winson Herry',
            review: '',
            location: 'South Korea',
            img: people3
        },
    ];
    return (
        <section className='my-20'>
            <div className='flex justify-center items-center my-16'>
                <div>
                    <h4 className="text-4xl font-bold text-center">Testimonials</h4>
                    <h2 className='text-3xl'>What our Customers say</h2>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 '>
                {
                    reviews.slice(0, 3).map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
            <div className='flex justify-center items-center mt-12'>
                <Link
                    className='text-xl  font-semibold bg-primary rounded-md px-4 py-2 text-black text-center'
                    to='/reviews'
                >See All Reviews</Link>
            </div>
        </section>
    );
};

export default Testimonials;