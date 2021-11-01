import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://limitless-cliffs-10924.herokuapp.com/add-new-service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className="container mb-5">
            <h1 className="text-center mt-5 mb-4">Our Fetured <span className="text-danger">Packages</span></h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                {
                    services === [] ?
                        <div className="text-center">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div> : services.map(service => <div key={service._id} className="col">
                            <div className="card h-100 shadow service-card">
                                <img src={service.imgUrl} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{service.serviceName}</h5>
                                    <p className="card-text">{service.description}</p>
                                    <p className="card-text fw-bold">Destination: <span className="text-danger">{service.destinaion}</span></p>
                                    <p className="card-text fw-bold">Price: <span className="text-danger">${service.price}</span></p>
                                </div>
                                <Link to={`/service/${service._id}`}><button className="btn btn-danger mx-auto w-100">Book Now</button></Link>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Services;