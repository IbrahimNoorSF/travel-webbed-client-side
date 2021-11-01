import React from 'react';

const text = () => {
    return (
        <div>
            <form>
                <h1 className="text-center">Add A New <span className="text-danger">Service</span></h1>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Service Name" required />
                    <label htmlFor="floatingInput">Service Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingDescription" placeholder="Description" required />
                    <label htmlFor="floatingDescription">Description</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingDestination" placeholder="Destination" required />
                    <label htmlFor="floatingDestination">Destination</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="url" className="form-control" id="floatingImg	" placeholder="Image" required />
                    <label htmlFor="floatingImg">Image Url</label>
                </div>
                <button className="btn btn-danger">Submit</button>
            </form>
        </div>
    );
};

export default text;