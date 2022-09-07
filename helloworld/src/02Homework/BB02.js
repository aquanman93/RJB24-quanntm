import React from "react";
// import { imgs } from "./basic-images";
import img2 from "../02Homework/basic-images/2.jpg"
export default function BB02() {
  return (
    <div class="card" style={{ width: "250px" }}>
      <img
        class="card-img-top"
        src={img2}
        alt="abc"
      ></img>
      <div class="card-body">
        <p class="card-title" style={{ color: "lightblue" }}>
          Samsung UHD TV 24inch
        </p>
        <div class="row col">
          <span class="fa fa-star" style={{ color: "orange" }}></span>
          <span class="fa fa-star" style={{ color: "orange" }}></span>
          <span class="fa fa-star" style={{ color: "orange" }}></span>
          <span class="fa fa-star" style={{ color: "orange" }}></span>
          <span class="fa fa-star"></span>
        </div>
        <div class="row">
          <p class="card-text col">$599</p>
          <p class="card-text" style={{ color: "orange" }}></p>
        </div>
      </div>
    </div>
  );
}
