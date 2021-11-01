import React from 'react';
import './Features.css';

const Features = () => {
    return (
        <div className="mt-5 mb-5 features-home">
            <h1 className="text-center mt-5 mb-3 pt-3">Features</h1>
            <div className="row row-col-sm-1 row-col-md-4 w-75 mx-auto text-center">
                <div className="col">
                    <img src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-custom-icon-img-1.png" alt="" />
                    <h1 className="fs-3">Restaurants</h1>
                </div>
                <div className="col">
                    <img src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-custom-icon-img-2.png" alt="" />
                    <h1 className="fs-3">Sightseeing</h1>
                </div>
                <div className="col">
                    <img src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-custom-icon-img-3.png" alt="" />
                    <h1 className="fs-3">Shops And Boutiques</h1>
                </div>
                <div className="col mb-5">
                    <img src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-custom-icon-img-4.png" alt="" />
                    <h1 className="fs-3">Where to Stay</h1>
                </div>
            </div>
        </div>
    );
};

export default Features;