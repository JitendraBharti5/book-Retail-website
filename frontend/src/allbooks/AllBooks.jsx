import React from "react";
import Navbar from "../components/Navbar";
import AllBook from "../components/AllBook";
import Footer from "../components/Footer";

function AllBooks() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <AllBook />
      </div>
      <Footer />
    </>
  );
}

export default AllBooks;
