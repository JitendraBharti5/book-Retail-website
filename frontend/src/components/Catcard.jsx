import React from "react";
import { Link } from "react-router-dom";

function Catcard({item}) {
  return (
    <div className="mt-4 my-3 p-3">
      <div className="card w-96 bg-base-100 shadow-xl  dark:bg-slate-900 dark:text-white dark:border ">
  <figure className="px-10 pt-10">
    <img src={item.image} alt="books" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{item.name}</h2>
    <div className="card-actions">
      <Link to="/course">
      <button className="btn btn-primary">Explore</button>
      </Link>
    </div>
  </div>
</div>
    </div>
  )
}

export default Catcard;

