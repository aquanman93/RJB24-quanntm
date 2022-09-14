import React from "react";

export default function Component2(props) {
  const { input } = props;
  return (
    <>
    {input.map((x) => (
      <div class="card" style={{ width: "250px" }}>
        <img class="card-img-top" src={x.img} alt="abc"></img>
        <div class="card-body">
          <p class="card-title" style={{ color: "lightblue" }}>
            {x.name}
          </p>
          <div class="row col">
            <span class="fa fa-star" style={{ color: "orange" }}></span>
            <span class="fa fa-star" style={{ color: "orange" }}></span>
            <span class="fa fa-star" style={{ color: "orange" }}></span>
            <span class="fa fa-star" style={{ color: "orange" }}></span>
            <span class="fa fa-star"></span>
          </div>
          <div class="row">
            <p class="card-text col">${x.price}</p>
            <p class="card-text" style={{ color: "orange" }}></p>
          </div>
        </div>
      </div>
      ))}
    </>
  );
}
