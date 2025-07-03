import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "../utils/axios.jsx";
import toast from "react-hot-toast";

function Form() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const authUser = JSON.parse(localStorage.getItem("Users")); 

    if (!authUser || !authUser._id) {
      return toast.error("Please login to post a book");
    }

    const newBook = {
      name: data.name,
      price: data.price,
      description: data.description,
      category: data.category,
      image: data.image,
      userId: authUser._id,
    };

    try {
      const res = await axios.post("/newbook", newBook);
      if (res.data) {
        toast.success("Book posted successfully");
        navigate(from, { replace: true });
      }
    } catch (err) {
      if (err.response) {
        toast.error("Error: " + err.response.data.message);
      }
    }
  };

  return (
    <div className="text-center">
      <h1 className="mt-20 font-extrabold">Enter Your Book Details</h1>
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>

        <label className="dark:text-white">Enter Book Name:</label>
        <br />
        <input
          type="text"
          placeholder="Book Name"
          className="input input-bordered input-primary w-full max-w-xl dark:bg-slate-900 dark:text-white"
          {...register("name", { required: true })}
        />
        {errors.name && <span className="text-sm text-red-500">Required</span>}
        <br /><br />

        <label className="dark:text-white">Book Description:</label>
        <br />
        <input
          type="text"
          placeholder="Description"
          className="input input-bordered input-primary w-full max-w-xl dark:bg-slate-900 dark:text-white"
          {...register("description", { required: true })}
        />
        {errors.description && <span className="text-sm text-red-500">Required</span>}
        <br /><br />

        <label className="dark:text-white">Price:</label>
        <br />
        <input
          type="number"
          min="10"
          placeholder="Price"
          className="input input-bordered input-primary w-full max-w-xs dark:bg-slate-900 dark:text-white"
          {...register("price", { required: true })}
        />
        {errors.price && <span className="text-sm text-red-500">Required</span>}
        <br /><br />

        <label className="dark:text-white">Book Genre:</label>
        <br />
        <select
          className="select select-primary w-full max-w-xs dark:bg-slate-900 dark:text-white"
          {...register("category", { required: true })}
        >
          <option disabled selected>Select category</option>
          <option>Study</option>
          <option>Motivational</option>
          <option>Astronomy</option>
          <option>Comedy</option>
          <option>Spiritual</option>
          <option>Story</option>
          <option>Novels</option>
          <option>Autobiography</option>
          <option>Songs</option>
          <option>Other</option>
        </select>
        {errors.category && <span className="text-sm text-red-500">Required</span>}
        <br /><br />

        <label className="dark:text-white">Image URL:</label>
        <br />
        <input
          type="text"
          placeholder="Image URL"
          className="input input-bordered input-primary w-full max-w-xl dark:bg-slate-900 dark:text-white"
          {...register("image", { required: true })}
        />
        {errors.image && <span className="text-sm text-red-500">Required</span>}
        <br /><br />

        <button className="btn btn-active btn-secondary m-5">Submit</button>
      </form>
    </div>
  );
}

export default Form;
