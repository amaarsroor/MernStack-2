import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home";
import Result from "../src/Pages/Result";
import ByCredit from "../src/Pages/ByCredit";
import Navbar from "../src/Components/Navbar";
import Footer from "./Components/Footer";
// import { SignInButton } from "@clerk/clerk-react";


function App() {
  return (
    <div className="min-h-screen bg-slate-200">
      <Navbar/>
      {/* <SignInButton/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy" element={<ByCredit />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
