import React from "react";
import { Link } from "react-router-dom";

//single product card

function Buynowc ({item,id}) {

  console.log("Image URL:", item.image);
  return (
   
   <div className="" key={id}  >
<div className="card   lg:card-side bg-base-100 shadow-xl  dark:bg-slate-900 dark:text-white dark:border ">
 
    <img src={item?.image} alt={item.name} />
    
  <div className="card-body">
    <h1 className="card-title">{item.name}</h1>
    <div className="badge badge-secondary">{item.category}</div>
    <div className="badge badge-outline pt-4 pb-4 pr-8 pl-8 mt-4">₹ {item.price}</div>
    <p>{item.description}</p>
    
    <div className="card-actions  space-x-{amount}">
    <button className="btn btn-wide">Add To Watchlist</button>
    <button className="btn btn-wide">Buy Now</button>
    </div>
  </div>
</div>
<div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          
    </div>
  </div>
  
  );
}

export default Buynowc;
