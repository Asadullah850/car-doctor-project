import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
import BookingRow from './BookingRow';
import { useNavigate } from 'react-router-dom';

const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const navigate = useNavigate()

    const handelRowDelete =(id)=>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method:'DELETE'
        })
        .then(res =>res.json())
        .then(data => {
            if (data.deletedCount > 0) {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                    }
                  })
            } else {
                return id
            }
            const deleteFilter = bookings.filter(booking => booking._id !== id)
            setBookings(deleteFilter)
        })
    }

    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url, {
            method:'GET',
            headers:{
                authorization: `Bearer ${localStorage.getItem('car-token')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setBookings(data)
                } else{
                    navigate('/')
                }
                console.log(data);
            })
    }, [])

    const handelUpdate =(id)=>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify({status:'confirm'})
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                const remaining = bookings.filter(booking => booking._id !== id)
                const updated = bookings.find(booking => booking._id === id)
                updated.status = 'confirm'
                const newBooking = [updated, ...remaining];
                setBookings(newBooking)
            }
        })
    }
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Service</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                {
                    bookings.map((booking, index) => <BookingRow key={booking._id} index={index} booking={booking} handelRowDelete={handelRowDelete} handelUpdate={handelUpdate}></BookingRow>)
                }
                
            </table>
        </div>
    );
};

export default Bookings;