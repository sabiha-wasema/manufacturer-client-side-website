import React from 'react';
import people1 from '../assets/images/people1.png'
import people2 from '../assets/images/people2.png'
import people3 from '../assets/images/people3.png'
import Review from './Review';


const Reviews = () => {
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
    const secondReviews = reviews.slice(3, 6);
    return (

        <div className='mt-20 px-10'>
            <h1 className='font-bold text-3xl text-center'>Customers Review</h1>
            <div className='container mx-auto  px-20 flex justify-center items-center mt-10 mb-10'>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-7'>
                    {
                        secondReviews.map(review => <Review key={review.id} review={review}></Review>)
                    }
                </div>
            </div>


        </div>

    );
};

export default Reviews;