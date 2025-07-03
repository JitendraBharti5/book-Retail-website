import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Profilec from "../components/Profilec";

function Profile() {
  return (
    <>
      <Navbar />
      <div className="m-40">
      <Profilec/>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
