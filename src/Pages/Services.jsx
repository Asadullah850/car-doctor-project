import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='w-[95%] mx-auto'>
            <h1 className='text-2xl font-semibold text-center mb-10'>Our Service Area</h1>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    services.map(service => <ServicesCard service={service} key={service._id}></ServicesCard>)
                }
            </div>
            <div className="text-center my-2">
            <button className="btn btn-outline text-[#FF3811] hover:bg-[#FF3811] hover:text-[#FFFFFF] ">More Services</button>
            </div>
        </div>
    );
};

export default Services;