import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://limitless-cliffs-10924.herokuapp.com/add-new-service', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully');
                    console.log(res);
                    reset();
                }
            })
    }
    return (
        <div className="w-75 mx-auto mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-center">Add A New <span className="text-danger">Service</span></h1>
                <div className="form-floating mb-3">
                    <input type="text" {...register("serviceName")} className="form-control" id="floatingInput" placeholder="Service Name" required />
                    <label htmlFor="floatingInput">Service Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" {...register("description")} className="form-control" id="floatingDescription" placeholder="Description" required />
                    <label htmlFor="floatingDescription">Description</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" {...register("destinaion")} className="form-control" id="floatingDestination" placeholder="Destination" required />
                    <label htmlFor="floatingDestination">Destination</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" {...register("price")} className="form-control" id="floatingprice" placeholder="Price" required />
                    <label htmlFor="floatingPrice">Price</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="url" {...register("imgUrl")} className="form-control" id="floatingImg	" placeholder="Image" required />
                    <label htmlFor="floatingImg">Image Url</label>
                </div>
                <button className="btn btn-danger">Submit</button>
            </form>
        </div>
    )
};
export default AddServices;