// import React from "react";
// // import { imgs } from "./basic-images";
// import img1 from "../02Homework/basic-images/1.jpg"
// export default function BB01() {
//   return (
//         <div class="row">
//             <div class="col-6">
//           <img class="float-right" src={img1} width="200px"></img>
//           </div>
//           <span>
//           <h3>Clothing & Apparel</h3>
//           <p>Accessories</p>
//           <p>Bags</p>
//           <p>Kid'Fashion</p>
//           <p>Mens</p>
//           </span>
//       </div>
//   );
// }

import React from "react";
import Comp from "./Component";
import img1 from "../SS1/basic-images/1.jpg";
const shop = [
  {
    menu: "Clothing & Apparel",
    submenu1: "Accessories",
    submenu2: "Bags",
    submenu3: "Kid fashion",
    submenu4: "Mens",
    img: img1,
  },
];

export default function BB01() {
  return (
    <>
      <Comp input={shop}></Comp>
    </>
  );
}
