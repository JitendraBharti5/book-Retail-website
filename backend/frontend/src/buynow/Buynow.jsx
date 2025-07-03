import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Detail from "../components/Detail";

//final single product page

function Buynow() {
  return (
    <>
      <Navbar />
      <div className=" m-20">
      <Detail/>
      </div>
      <Footer />
      </>
  );
}
export default Buynow;
