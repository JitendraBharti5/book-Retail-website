import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import AllBooks from "./allbooks/AllBooks";
import Signup from "./components/Signup";
import Buynow from "./buynow/Buynow";
import Profile from "./profile/Profile";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Sell from "./sell/Sell";


function App() {
  const [authUser, setAuthUser] = useAuth();
  // console.log(authUser);
  return (
    <>
      <div className=" dark:bg-slate-900 dark:text-white dark:border ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <AllBooks/> : <Navigate to="/signup" />}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/detail/:id" element={<Buynow/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/sell" element={<Sell/>} />
        </Routes>
        <Toaster />
        
      </div>
    </>
  );
}

export default App;
