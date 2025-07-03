import React, { useState } from "react";
import axios from "../utils/axios.jsx";
import Cards from "./Cards.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (searchTerm.trim() === "") return;
    try {
      const res = await axios.get(`/book/search/${searchTerm}`);
      setResults(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>

      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-40 mb-20">
        <h1 className="text-3xl text-center mb-6">Search Books</h1>

        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Enter book name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input input-bordered w-1/2 mr-4 text-black"
          />
          <button
            onClick={handleSearch}
            className="btn btn-primary"
          >
            Search
          </button>
        </div>

        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {results.map((item) => (
              <Cards key={item._id} id={item._id} item={item} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No books found.</p>
        )}
      </div>
    </>
  );
}

export default SearchPage;
