import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "../utils/axios.jsx";
import { Link } from "react-router-dom";

function AllBook() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("/book");
        // console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl ">
          Get All books at best price and reuse the used books to save the<span className="text-green-500"> enviorement</span>
          </h1>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item._id} id={item._id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default AllBook;
