import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Cards from "../components/Cards";
import axios from "../utils/axios.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx"
function CategoryBooks() {
  const { category } = useParams();
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBooksByCategory = async () => {
      try {
        const res = await axios.get(`/book/category/${category}`);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBooksByCategory();
  }, [category]);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <Navbar/>
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl ">
            All Books in <span className="text-green-500">{category}</span> Category
          </h1>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.length > 0 ? (
            book.map((item) => <Cards key={item._id} id={item._id} item={item} />)
          ) : (
            <p className="mt-6 text-center text-gray-500">No books found in this category.</p>
          )}
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default CategoryBooks;
