import React, { useEffect, useState } from "react";
import axios from "../utils/axios.jsx";
import { Link, useParams } from "react-router-dom";
import Buynowc from "./Buynowc";

function Detail() {
  const { id } = useParams(); // Extract the 'id' from the URL parameters
  const [sbook, setSBook] = useState(null); // Use null as the initial state for the single book

  useEffect(() => {
    const getSBook = async () => {
      try {
        const res = await axios.get(`/detail/${id}`); // Fetch book details using the 'id' in the URL
 
        setSBook(res.data); // Set the fetched book data to the state
      } catch (error) {
        console.log(error);
      }
    };

    getSBook(); // Call the function to fetch data
  }, [id]); // Depend on 'id' to refetch if 'id' changes

  if (!sbook) {
    return <div>Loading...</div>; // Render a loading state while fetching data
  }
console.log(sbook);
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl">
          We're delighted to have you{" "}
          <span className="text-pink-500">Here! :)</span>
        </h1>
        <p className="mt-12">
        Become part of a book's rich history, carrying on the tradition of passionate readers who came before you.
            <br/>
            <br/>
            Embrace the joy of used books and reduce your environmental footprint, one story at a time.
        </p>
        <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {/* Since sbook is a single object, there's no need to map over it */}
        <Buynowc id={sbook._id} item={sbook} /> {/* Pass the book data to the Buynowc component */}
      </div>
    </div>
  );
}

export default Detail;
