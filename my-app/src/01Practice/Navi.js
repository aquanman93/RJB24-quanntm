import React from "react";
import { BrowserRouter, Link, NavLink, Routes, Route } from "react-router-dom";
import Form from "./Form";
import Home1 from "./components/Home1";

export default function Navi() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/">Homepage </Link>
          </li>
          <li className="nav-item">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/login" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}
