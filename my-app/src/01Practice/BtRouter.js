import React from 'react'
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home1 from "./components/Home1"
import Login1 from "./components/Login1"
export default function BtRouter() {
  return (
   <>
     <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home1 />}/>
        <Route path="/login" element={<Login1 />}/>
     </Routes>
     </BrowserRouter>
</>
  )
}
