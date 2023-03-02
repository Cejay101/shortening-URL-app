import React from "react";
import Navbar from "./components/Nav.js";
import Login from "./pages/Login.js";
import SignUp from "./pages/SignUp.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FrontLanding from "./components/FrontLanding.js";
import AdvancedStat from "./components/AdvancedStat.js";
import Footer from "./components/Footer.jsx";
import Boost from "./components/Boost.jsx";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <FrontLanding/>
      </BrowserRouter>
      <AdvancedStat/>
      <Boost/>
      <Footer/>
    </div>
  );
}
