import React from "react";

export default function SS2BB01func(props) {
  const { input } = props;
  return (
    <>
      {input.map((x) => (
        <div class="progress" style={{ height: "20px" }}>
          <div
            class="progress-bar bg-danger"
            style={{ width : `${x.percentage}%`, height: "20px" }}
          ></div>
        </div>
      ))}
    </>
  );
}
