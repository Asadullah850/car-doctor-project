import React from 'react';

const BookingRow = ({ booking, handelRowDelete, handelUpdate }) => {
    const { customerName, servicesImg, service_name, price, phoneNumber, status, email, date, _id } = booking
    // console.log(booking);
    // console.log(servicesData);
    
    return (
        <tbody>
            {/* row 1 */}
            <tr>
                <td>
                    <div className="my-auto">
                        <button onClick={()=>handelRowDelete(_id)} className='mx-4 btn bg-slate-500 p-2 text-lg font-bold rounded-full'>X</button>
                    </div>
                </td>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar ">
                            <div className=" rounded-md w-32 h-32">
                                <img src={servicesImg} alt="Avatar Tailwind CSS Component" />
                            </div>
                            <div className="mx-4">
                                <span>{customerName}</span>
                                <br />
                                <span className="badge badge-ghost badge-sm">{phoneNumber}</span> <br />
                                <span className="badge badge-ghost badge-sm">{email}</span> <br />
                            </div>
                        </div>

                        <div>
                        </div>
                    </div>
                </td>
                <td>
                    <div className="font-bold">{service_name}</div>
                </td>
                
                <td>
                    <div className="text-sm ">Price= ${price}</div>
                </td>
                <td>{date}</td>
                <th>
                    {
                        status === 'confirm' ? <span className='text-blue-800'>Confirmed</span>
                        :
                        <button onClick={()=>handelUpdate(_id)} className="btn btn-ghost btn-xs">Place Confirm</button>
                    }
                </th>
            </tr>
        </tbody>
    );
};

export default BookingRow;