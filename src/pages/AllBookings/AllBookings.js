import React, { useEffect, useState } from 'react';

const AllBookings = () => {
    const [bookings, setBookings] = useState([])
    useEffect(() => {
        fetch('https://limitless-cliffs-10924.herokuapp.com/my-bookings')
            .then(res => res.json())
            .then(data => setBookings(data));
    }, [])
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete');
        if (proceed) {
            const url = `https://limitless-cliffs-10924.herokuapp.com/my-bookings/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('Service Deleted successfully')
                        const remaining = bookings.filter(bookings => bookings._id !==
                            id);
                        setBookings(remaining);
                    }
                });
        }
    }
    console.log(bookings);
    return (
        <div>
            <div className="mt-5 container">
                <h1 className="text-center mb-4">Manage Everyone's <span className="text-danger">Booking</span> History</h1>
                {
                    bookings === [] ? <p className="text-muted text-center">If some one orders it will Appear here</p> : <p className="text-muted text-center mb-4">Total Orders Found: {bookings.length}</p>
                }
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        bookings.map(booking => <div className="col">
                            <div className="card text-center">
                                <div className="card-body">
                                    <h5 className="card-title">Order Id: {booking._id}</h5>
                                    <p className="card-text">Name: {booking.userName}</p>
                                    <p className="card-text">Email: {booking.userEmail}</p>
                                    <p className="card-text">Date To Go: {booking.userDate}</p>
                                    <p className="card-text">Phone: {booking.userPhone}</p>
                                    <p>Status: {booking?.status === "Pending" ? <span className="p-2 bg-danger text-white rounded">Pending</span> : <span className="p-2 rounded bg-success text-white">Confirmed</span>}</p>
                                </div>
                                <button className="btn btn-danger" onClick={() => handleDelete(booking._id)}>Delete</button>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllBookings;