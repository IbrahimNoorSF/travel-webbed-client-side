import React, { useEffect, useState } from 'react';

const Booking = (props) => {
    const { userPhone, userDate, userEmail, _id, userName } = props.booking;
    const handleConfirmBooking = id => {
        const confirmBooking = { status: "Confirmed" };

        const url = `https://limitless-cliffs-10924.herokuapp.com/my-bookings/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'appication/json'
            },
            body: JSON.stringify(confirmBooking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modification > 0) {
                    alert('Service Updated Successfully')
                }
                window.location.reload();
            })
    }
    const [booking, setBooking] = useState([]);
    useEffect(() => {
        fetch('https://limitless-cliffs-10924.herokuapp.com/my-bookings')
            .then(res => res.json())
            .then(data => setBooking(data));
    }, []);
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
                        const remaining = booking.filter(bookings => bookings._id !==
                            id);
                        setBooking(remaining);
                        window.location.reload();
                    }
                });
        }
    }

    return (
        <div className="col">
            <div className="card text-center">
                <div className="card-body">
                    <h5 className="card-title">Order Id: {_id}</h5>
                    <p className="card-text">Name: {userName}</p>
                    <p className="card-text">Email: {userEmail}</p>
                    <p className="card-text">Date To Go: {userDate}</p>
                    <p className="card-text">Phone: {userPhone}</p>
                    <p>Status: {props?.booking?.status === "Pending" ? <span className="p-2 bg-danger text-white rounded">Pending</span> : <span className="p-2 rounded bg-success text-white">Confirmed</span>}</p>
                    {
                        props?.booking?.status === "Pending" ? <button className="btn btn-success me-2" onClick={() => handleConfirmBooking(_id)}>Confirm</button> : <button className="btn btn-success me-2 disabled">Confirmed</button>
                    }
                    <button className="btn btn-danger" onClick={() => handleDelete(_id)}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Booking;