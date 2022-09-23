import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Project from "./Project";
import Login from "../Login";
function RouterPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Project" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}
export default RouterPage;
