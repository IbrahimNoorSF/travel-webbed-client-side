import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import MyBooking from '../MyBooking/MyBooking';

const MyBookings = () => {
    const [bookings, setBookings] = useState([])
    const { user } = useAuth();
    console.log(user);

    useEffect(() => {
        fetch('https://limitless-cliffs-10924.herokuapp.com/my-bookings')
            .then(res => res.json())
            .then(data => setBookings(data));
    }, [])
    const myDatas = bookings.filter(myData => myData.userEmail === user.email);
    return (
        <div className="mt-5 container">
            <h1 className="text-center mb-4">Your <span className="text-danger">Booking</span> History</h1>
            {
                bookings === [] ? <p className="text-muted text-center">If you order, it will Appear here</p> : <p className="text-muted text-center mb-4">Total Orders Found: {myDatas.length}</p>
            }
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    bookings.filter(myData => myData.userEmail === user.email).map(booking => <MyBooking key={booking._id} booking={booking}></MyBooking>)
                }
            </div>
        </div>
    );
};

export default MyBookings;