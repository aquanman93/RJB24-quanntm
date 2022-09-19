import React from "react";

export default function Component(props) {
  const { input } = props;
  return (
    <>
      {input.map((x) => (
        <div class="row">
          <div class="col-6">
            <img class="float-right" src={x?.img} width="200px"></img>
          </div>
          <span>
            <h3>{x?.menu}</h3>
            <p>{x?.submenu1}</p>
            <p>{x?.submenu2}</p>
            <p>{x?.submenu3}</p>
            <p>{x?.submenu4}</p>
          </span>
        </div>
      ))}
    </>
  );
}
