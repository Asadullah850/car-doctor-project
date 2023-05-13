import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const OrderFrom = () => {
    const { user } = useContext(AuthContext)
    const singleServices = useLoaderData()
    const { title, _id, price, img } = singleServices

    const handelCheckOut = (event) => {
        event.preventDefault();
        const form = event.target
        const name = form.name.value
        const date = form.date.value
        const phoneNumber = form.phoneNumber.value
        const email = form.email.value
        const massage = form.massage.value
        const order = {
            customerName: name,
            email,
            phoneNumber,
            date,
            servicesImg: img,
            service_name: title,
            serviceId: _id,
            price: price,
            otherInfo: massage
        }
        console.log(order);
        fetch(`http://localhost:5000/bookings`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    Swal.fire({
                        // position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }
    return (
        <div>
            <div className=" relative">
                <img src="https://i.ibb.co/Rj6j2cg/checkout.png" alt="" srcset="" />
                <div className=' absolute bottom-0 w-full h-[100%] text-white px-10 font-bold text-5xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%]'>
                    <p className='mt-[10%]'>Check Out</p>
                </div>
            </div>
            <div className="hero bg-base-200">
                <form className='' onSubmit={handelCheckOut}>
                    <h1 className='text-center mt-8 text-xl font-semibold'>Your Add This <span className=' text-[#FF3811] font-bold'>{title}</span> Services</h1>
                    <div className="flex justify-start mt-10">
                        <p className=' text-lg text-[#FF3811] font-bold'>Services Name= {title}</p>
                        <p className=' text-lg text-[#FF3811] font-bold ml-[10%]'>Price= ${price}</p>
                    </div>
                    <div className="card-body max-sm:mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">

                        <div className="form-control max-sm:w-[350px]">
                            <input type="text" placeholder="Full Name" name='name' className="input input-bordered" defaultValue={user?.displayName} required />
                        </div>
                        <div className="form-control max-sm:w-[350px]">
                            <input type="date" placeholder="" name='date' defaultValue={user?.date} className="input input-bordered" required />
                        </div>
                        <div className="form-control max-sm:w-[350px]">
                            <input type="text" placeholder="Your Email" name='email' defaultValue={user?.email} className="input input-bordered" />
                        </div>
                        <div className="form-control max-sm:w-[350px]">
                            <input type="tel" placeholder="Your Phone Number" name='phoneNumber' defaultValue={user?.phone} className="input input-bordered" required />
                        </div>
                        <div className="form-control max-sm:w-[350px]">
                            <input type="text" name='price' defaultValue={'$' + price} className="input input-bordered" readOnly />
                        </div>

                        <div className="form-control max-sm:w-[400px]">
                            <textarea name="massage" id="" cols="50" rows="2" placeholder='Your Location And Typing Others Massage' className='border-2 p-2 rounded-lg' required></textarea>
                        </div>
                    </div>

                    <div className="form-control lg:w-full md:w-full max-sm:w-[400px] mt-6">
                        
                            <button type='submit' className="btn btn-primary bg-[#FF3811] border-none">
                            Order Confirm
                            </button>
                       
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OrderFrom;