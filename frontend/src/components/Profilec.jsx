import React from 'react'
import { Link } from "react-router-dom";

function Profilec() {
  return (

       <div className="justify-x-center flex flex-wrap">
 <div className="border-2 h-40 w-40">
<img src="w.png" alt="image"/>
</div>
<div className="pl-20">
<div>
<span>Name: </span>
<span>User_Name</span>
</div>
<br/>
<div class="email e">
    <span>Email: </span>
    <span>User_Name55@gmail.com</span>
</div>
<br/>
<div class="num e">
    <span>Contact Nu. </span>
    <span>81035xxxxx</span>
</div>
<br/>
<div class="loc e">
    <span>State: </span>
    <span>Madhya-Pradesh</span>
</div>
<br/>
</div>
<Link to="/sell">
<button className="btn btn-wide flex justify-x-center m-20">Sell A Book</button>
</Link>
    <br/>
    </div>
  )
}


export default Profilec;
