import React, { useEffect, useState } from "react";
import axios from "../utils/axios.jsx";
import { Link, useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [sbook, setSBook] = useState(null);

  useEffect(() => {
    const getSBook = async () => {
      try {
        const res = await axios.get(`/detail/${id}`);
        setSBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getSBook();
  }, [id]);

  if (!sbook) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl">Loading book details...</p>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-10 mt-28">
      
      {/* Welcome Message */}
      <div className="text-center mb-12 space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold">
          We're delighted to have you <span className="text-pink-500">Here! :)</span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
          Become part of a book's rich history, carrying on the tradition of passionate readers who came before you.
        </p>
        <br/>
        <Link to="/search">
          <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back to Search
          </button>
        </Link>
      </div>

      {/* Book Details Layout */}
      <div className="flex flex-col lg:flex-row gap-10 items-start border border-gray-300 dark:border-gray-700 rounded-lg p-6 shadow-md bg-white dark:bg-slate-900">

        {/* Image Section */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <img
            src={sbook.image}
            alt={sbook.name}
            className="w-full max-h-[400px] object-contain rounded-lg"
          />
        </div>

        {/* Book Details */}
        <div className="w-full lg:w-2/3 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">{sbook.name}</h2>

          <div className="flex flex-wrap gap-4">
            <span className="bg-green-100 text-green-800 px-4 py-1 rounded-full dark:bg-green-800 dark:text-white">
              {sbook.category}
            </span>
            <span className="border px-4 py-1 rounded-full dark:border-white">
              ₹ {sbook.price}
            </span>
          </div>

          <p className="text-gray-700 dark:text-gray-300 text-lg">{sbook.description}</p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 pt-4">
            <button className="btn btn-primary btn-wide">Take on Rent</button>
            <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer">
              <button className="btn btn-success btn-wide">Buy Now</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
