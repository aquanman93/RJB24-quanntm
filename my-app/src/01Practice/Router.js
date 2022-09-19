import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import BB01 from "../02Homework/SS1/BB01";
import Form from "../01Practice/Form";
export default function Router() {
  return(
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/form" element={<Form />}/>
  </Routes>
  </BrowserRouter>
  {/* <Link to="../"></Link> */}
  </>
  );
}
