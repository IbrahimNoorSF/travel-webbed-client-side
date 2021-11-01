import React from 'react';

const OurTeam = () => {
    return (
        <div className="mt-5">
            <h1 className="text-center mb-5 mt-5">Our <span className="text-danger">Team</span></h1>
            <div className="row row-col-1 row-col-md-4 w-100 mx-auto text-center">
                <div className="col">
                    <img className="rounded-circle" src="https://happy-events.cmsmasters.net/wp-content/uploads/2016/06/srf-300x300.jpg" alt="" />
                    <h1 className="fs-2 mb-2">Alice Bohn</h1>
                    <p>MANAGER</p>
                </div>
                <div className="col">
                    <img className="rounded-circle" src="https://happy-events.cmsmasters.net/wp-content/uploads/2016/06/hh-300x300.jpg" alt="" />
                    <h1 className="fs-2 mb-2">Mia Turner</h1>
                    <p>FOUNDER</p>
                </div>
                <div className="col">
                    <img className="rounded-circle" src="https://happy-events.cmsmasters.net/wp-content/uploads/2016/06/sbd-300x300.jpg" alt="" />
                    <h1 className="fs-2 mb-2">Amy Adams</h1>
                    <p>СOORDINATOR</p>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;