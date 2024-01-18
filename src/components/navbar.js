import React from "react";
import "./navbar.css";
import About from "./About.js";
import Contact from "./Contact.js";
// import SignIn from './signin.js'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <span>
          <Link className = "link" to="/">Hello React</Link>
        </span>
        <span>
          <Link className = "link l1" to="/About">About Us</Link>
        </span>
        <span>
          <Link className = "link l2" to="/Contact">Contact Us</Link>
        </span>
       

        {/* <a href = "/">Contact Us</a> */}
        {/* <a href = "/">Sign In</a> */}
      </nav>
      <Routes>
        <Route path = "/" element={<h1 className="home">Hello React.js</h1>}/>
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navbar;
