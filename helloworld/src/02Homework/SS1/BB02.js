import React from "react";
import Comp2 from "./Component2";
// import { imgs } from "./basic-images";
import img2 from "../SS1/basic-images/2.jpg";
const shop2 = [
{
  img: img2,
  name: "Samsung UHD TV 24inch",
  price: "599",
},
];

export default function BB02() {
  return (
    <>
    <Comp2 input={shop2}></Comp2>
    </>
  );
}
