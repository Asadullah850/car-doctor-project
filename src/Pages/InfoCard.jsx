import React from 'react';
import { HiOutlineCalendarDays, HiPhoneArrowUpRight, HiMapPin } from "react-icons/hi2";
const InfoCard = () => {
    return (
        <footer className="footer p-10 bg-[#000000] rounded-lg my-10">
            <div className='flex'>
                <div className="text-white">
                    <HiOutlineCalendarDays className='text-4xl'/>
                </div>
                <div className="text-white">
                    <p className=""> We are open monday-friday</p>
                    <p className="text-lg font-bold"> 7:00 am - 9:00 pm</p>
                </div>
            </div>
            <div className='flex'>
                <div className="text-white">
                    <HiPhoneArrowUpRight className='text-4xl'/>
                </div>
                <div className="text-white">
                    <p className=""> Have a question?</p>
                    <p className="text-lg font-bold"> +2546 251 2658</p>
                </div>
            </div>
            <div className='flex'>
                <div className="text-white">
                    <HiMapPin className='text-4xl'/>
                </div>
                <div className="text-white">
                    <p className=""> Need a repair? our address</p>
                    <p className="text-lg font-bold"> Liza Street, New York</p>
                </div>
            </div>
        </footer>
    );
};

export default InfoCard;