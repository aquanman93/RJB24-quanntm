import React from "react";

export default function Bai1(props) {
  const { input, number } = props;
  return (
    <div style={{ color: input.color }}>
      {input.text} + {number}
    </div>
  );
}
