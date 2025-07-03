import React from "react";
import banner from "../../public/Banner.png";
import Login from "./Login";
import Logout from "./Logout"
import { useAuth } from "../context/AuthProvider";

function Banner() {
  const [authUser, setAuthUser] = useAuth();
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold text-orange-500">
            "A book is a gift that you can open again and again."
            </h1>
            <p className="text-sm md:text-xl">
            Become part of a book's rich history, carrying on the tradition of passionate readers who came before you.
            <br/>
            <br/>
            Embrace the joy of used books and reduce your environmental footprint, one story at a time.
            </p>
           
          </div>
          
        </div>
        <div className=" order-1 w-full mt-20 md:w-1/2">
          <img
            src={banner}
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt=""
          
        />
        </div>
      </div>
    </>
  );
}

export default Banner;
