import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Form from "./Form";
// import BB01 from "../02Homework/SS1/BB01";
// import BB02 from "../02Homework/SS1/BB02";
export default function Navi() {
  return (
    <BrowserRouter>
      {/* <nav>
        <Link to="/1">B1</Link>
        <Link to="/2">Form</Link>
        <Link to="/3">B2</Link>
      </nav> */}
      <Routes>
        {/* <Route path="/1" element={<BB01 />} /> */}
        <Route path="/2" element={<Form />} />
        {/* <Route path="/3" element={<BB02 />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
