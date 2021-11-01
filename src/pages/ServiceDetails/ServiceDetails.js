import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import axios from 'axios';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';

const ServiceDetails = () => {
    const { id } = useParams();
    const { register, handleSubmit, reset } = useForm();
    const [serviceDetails, setSeviceDetails] = useState([]);
    const [signleService, setSingleService] = useState({});
    const { user } = useAuth();
    const location = useLocation();
    const history = useHistory();

    // redirecting
    const redirect_url = location?.state?.from || '/';

    useEffect(() => {
        fetch("https://limitless-cliffs-10924.herokuapp.com/add-new-service")
            .then(res => res.json())
            .then(data => setSeviceDetails(data))
    }, []);

    useEffect(() => {
        const serviceFound = serviceDetails.find(service => service._id === id)
        setSingleService(serviceFound);
    }, [serviceDetails])

    const onSubmit = data => {
        console.log(data);
        axios.post('https://limitless-cliffs-10924.herokuapp.com/my-bookings', data)
            .then(res => {
                if (res.data.insertedId) {
                    history.push(redirect_url);
                    alert('Please Confirm Your Booking On My Bookings Page');
                    reset();
                }
            })
    }
    return (
        <div className="container mt-5 mb-5">
            <div className="d-md-flex">
                <div className="container ms-md-5">
                    <h1>{signleService?.serviceName}</h1>
                    <p>Destination: {signleService?.destinaion}</p>
                    <p className="pe-5">{signleService?.description}</p>
                    <p className="fw-bold">Price: <span className="text-danger">${signleService?.price}</span></p>
                </div>
                <div>
                    <img className="rounded img-fluid" src={signleService?.imgUrl} alt="" />
                </div>
            </div>
            <div className="mt-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-center mb-3"
                    >You Are Just 1 Step Away From Your <span className="text-danger">Destination</span>!</h1>
                    <input type="hidden" {...register("status")} defaultValue="Pending" />
                    <div className="form-floating mb-3">
                        <input type="text" {...register("userName")} defaultValue={user.displayName} className="form-control" id="floatingName" placeholder="Your Name" required />
                        <label htmlFor="floatingName">Your Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" {...register("userEmail")} defaultValue={user.email} className="form-control" id="floatingEmail" placeholder="Your Email" required />
                        <label htmlFor="floatingEmail">Your Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="number" {...register("userPhone")} className="form-control" id="floatingNumber" placeholder="Your Phone Number" required />
                        <label htmlFor="floatingNumber">Your Phone Number</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="date" {...register("userDate")} className="form-control" id="floatingDate" placeholder="When Do You Want To Go" required />
                        <label htmlFor="floatingData">Please Pick A Date</label>
                    </div>
                    <button className="btn btn-danger btn-lg">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ServiceDetails;