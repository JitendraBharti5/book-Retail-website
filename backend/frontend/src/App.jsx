import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import AllBooks from "./search/Search";
import Signup from "./components/Signup";
import Buynow from "./buynow/Buynow";
import Profile from "./profile/Profile";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Sell from "./sell/Sell";
import CategoryBooks from "./category/Category";
import SearchPage from "./search/Search";
import About from "./about/About";

function App() {
  const [authUser] = useAuth();

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white dark:border">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/detail/:id" element={<Buynow />} />

          {/* Protected Profile Route */}
          <Route
            path="/profile"
            element={authUser ? <Profile /> : <Navigate to="/signup" replace />}
          />

          {/* Protected Sell Route */}
          <Route
            path="/sell"
            element={authUser ? <Sell /> : <Navigate to="/signup" replace />}
          />

          <Route path="/category/:category" element={<CategoryBooks />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
