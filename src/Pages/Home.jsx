import React from 'react';
import Banner from '../Shared/Banner';
import Services from './Services';
import InfoCard from './InfoCard';

const Home = () => {
    return (
        <div className='w-[95%] mx-auto'>
            <Banner></Banner>
            {/* About us */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="lg:w-1/2 relative">
                    <img src="https://i.ibb.co/WWR0dZk/person.jpg" className="w-5/6 rounded-lg shadow-2xl" />
                    <img src="https://i.ibb.co/cNsbmTH/parts.jpg" className="w-1/2 border-4 rounded-lg shadow-2xl absolute right-5 top-1/2" />
                    </div>
                    <div className='lg:w-1/2'>
                        <p className='p-5 text-lg'>Abut Us</p>
                        <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <p>
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </p>
                        <button className="btn btn-primary bg-[#FF3811] my-4 border-none ">Get More Info</button>
                    </div>
                </div>
            </div>
            {/* services */}
            <Services></Services>
            <InfoCard></InfoCard>
        </div>
    );
};

export default Home;