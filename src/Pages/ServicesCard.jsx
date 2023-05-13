import React from 'react';
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { Link } from 'react-router-dom';
const ServicesCard = ({ service }) => {
    const { price, img, title, _id } = service;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" className='h-[200px]' /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-semibold">{title}</h2>
                <p className='text-[#FF3811] text-lg font-bold'>Price: $ {price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/bookings/${_id}`}>
                        <button className="btn btn-primary bg-transparent border-none hover:text-slate-50 text-[#FF3811] text-5xl font-bold"><HiOutlineArrowSmallRight></HiOutlineArrowSmallRight></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;