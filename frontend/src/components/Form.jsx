import React, {useState} from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
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
    const newbook = {
      name: data.name,
      price: data.price,   
     description: data.description,
      category: data.category,
      image: data.image,
    };
    console.log(newbook);
    await axios
      .post("/book", newbook)

      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Book posted Successfully");
          navigate(from, { replace: true });
          }

        localStorage.setItem("Books", JSON.stringify(res.data.book));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        
        }
      });
  };
  return (
   
      <div className="text-center ">
    <h1 className="mt-20 text-center font-extrabold ">Enter Your Book Details</h1>
    <br/>
    <br/>
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
   <span className="dark:bg-slate-900 dark:text-white ">ENTER NAME OF BOOK:</span>
   <br/>
   <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xl  dark:bg-slate-900 dark:text-white dark:border"                
    {...register("name", { required: true })}/>
    <br />
              {errors.name && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
   <br/>
   <br/>
   <span className="mb-20 text-center font-extrabold ">Book Detail:</span>
   <br/>
   <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xl dark:bg-slate-900 dark:text-white dark:border"                
    {...register("description", { required: true })}
    />
    <br />
              {errors.description && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
   <br/>
   <br/>
   <span className="mb-20 text-center font-extrabold ">Price:</span>
   <br/>
   <input type="text"  min="10" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs dark:bg-slate-900 dark:text-white dark:border" 
   {...register("price", { required: true })}
   />
   <br />
              {errors.price && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
             
   <br/>
   <br/>
   <span className="mb-20 text-center font-extrabold ">Select Book Gener:</span>
   <br/>
   <select className="select select-primary w-full max-w-xs dark:bg-slate-900 dark:text-white dark:border" 
    {...register("category", { required: true })}
    >
    <br />
               {errors.category && (
                 <span className="text-sm text-red-500">
                   This field is required
                 </span>
               )}
  <option disabled selected>Select  word justifies your book best</option>
  <option>Study</option>
  <option>Motivational</option>
  <option>Atronomy</option>
  <option>Comedy</option>
  <option>Spiritual</option>
  <option>Story</option>
  <option>Novels</option>
  <option>Autobiography</option>
  <option>Songs</option>
  <option>other</option>
 </select>
<br/>
<br/>
<span className="dark:bg-slate-900 dark:text-white ">ENTER Book image Url:</span>
   <br/>
   <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xl  dark:bg-slate-900 dark:text-white dark:border"                
    {...register("image", { required: true })}/>
    <br />
              {errors.image && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
   <br/>
   <br/>

<button className="btn btn-active btn-secondary   m-5  dark:bg-white-900 dark:text-white dark:border">Sumbit</button>
<br/>
<br/>
</form>
</div>



  );
}           
  

export default Form;
