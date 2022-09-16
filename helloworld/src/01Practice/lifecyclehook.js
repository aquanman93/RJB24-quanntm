import React from "react";
import { FaThumbsUp } from "react-icons/fa";

function Button({ onClick, children }) {
  console.log("Rendering button - ", children);
  return (
    <button onClick={onClick}>
      <FaThumbsUp />
    </button>
  );
}

export default React.memo(Button);
