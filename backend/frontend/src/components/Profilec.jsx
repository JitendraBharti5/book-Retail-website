import React, { useEffect, useState } from "react";
import axios from "../utils/axios.jsx";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Profilec() {
  const [books, setBooks] = useState([]);
  const [editBook, setEditBook] = useState(null);
  const { register, handleSubmit, reset } = useForm();
  const authUser = JSON.parse(localStorage.getItem("Users"));

  useEffect(() => {
    if (authUser?._id) {
      fetchUserBooks();
    }
  }, []);

  const fetchUserBooks = async () => {
    try {
      const res = await axios.get(`/book/user/${authUser._id}`);
      console.log("API response:", res.data);
      setBooks(res.data.books); 
    } catch (err) {
      console.error("Fetch books failed:", err);
      toast.error("Failed to fetch books");
    }
  };

  const handleEdit = (book) => {
    setEditBook(book);
    reset(book);
  };

  const handleDelete = async (bookId) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      try {
        await axios.delete(`/book/${bookId}`);
        toast.success("Book deleted successfully");
        fetchUserBooks();
      } catch (err) {
        toast.error("Failed to delete book");
      }
    }
  };

  const onSubmit = async (data) => {
    try {
      await axios.put(`/book/${editBook._id}`, data);
      toast.success("Book updated");
      fetchUserBooks();
      setEditBook(null);
    } catch (err) {
      toast.error("Failed to update");
    }
  };

  return (
    <div className="justify-x-center flex flex-wrap">
      <div className="border-2 h-40 w-40">
        <img src="w.png" alt="image" />
      </div>

      <div className="pl-20">
        <div><span>Name: </span><span>{authUser?.fullname || "N/A"}</span></div><br />
        <div className="email e"><span>Email: </span><span>{authUser?.email || "N/A"}</span></div><br />
        <div className="num e"><span>Contact No.: </span><span>{authUser?.contact || "N/A"}</span></div><br />
        <div className="loc e"><span>State: </span><span>{authUser?.state || "N/A"}</span></div><br />
      </div>

      <Link to="/sell">
        <button className="btn btn-wide flex justify-x-center m-20">Sell A Book</button>
      </Link>

      <br />

      <div>
        <h2 className="text-2xl font-bold mb-4">Your Listed Books</h2>

       {!Array.isArray(books) || books.length === 0 ? (
          <p>No books posted yet.</p>
        ) : (
          <div className="flex flex-wrap gap-4">
            {books.map((book) => (
              <div
                key={book._id}
                className="border p-4 rounded-md flex justify-between items-center dark:bg-slate-800 dark:text-white"
              >
                <div>
                  <h3 className="font-bold text-xl">{book.name}</h3>
                  <p>{book.description}</p>
                  <p>Price: {book.price}</p>
                  <p>Category: {book.category}</p>
                </div>
                <div className="space-x-2">
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => handleEdit(book)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-error"
                    onClick={() => handleDelete(book._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        {editBook && (
          <div className="mt-10 p-4 border rounded-md dark:bg-slate-800 dark:text-white">
            <h3 className="text-xl font-bold mb-2">Edit Book</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full mb-2"
                {...register("name", { required: true })}
              />
              <input
                type="text"
                placeholder="Description"
                className="input input-bordered w-full mb-2"
                {...register("description", { required: true })}
              />
              <input
                type="text"
                placeholder="Price"
                className="input input-bordered w-full mb-2"
                {...register("price", { required: true })}
              />
              <input
                type="text"
                placeholder="Category"
                className="input input-bordered w-full mb-2"
                {...register("category", { required: true })}
              />
              <input
                type="text"
                placeholder="Image URL"
                className="input input-bordered w-full mb-2"
                {...register("image", { required: true })}
              />
              <button className="btn btn-success mr-2" type="submit">
                Save
              </button>
              <button
                className="btn btn-error"
                onClick={() => setEditBook(null)}
                type="button"
              >
                Cancel
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profilec;
