import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import Header from "./01Practice/Header";
// import BB01 from "./02Homework/SS1/BB01.js";
// import BB02 from "./02Homework/SS1/BB02.js";
// import S2BB01 from "./02Homework/SS2/S2BB01";
// import Lifecyclehook from "./01Practice/lifecyclehook"
// import Form from "./01Practice/Form";
// import Router from "./01Practice/Router";
import Navi from "./01Practice/Navi";
// let h =5;
// for (let i=0; i<h; i++){
// let star= ''
// for (let index=0; index <=i; index++){
//   star += '*'
// }
// console.log(star)
// }
// console.log('\n')

// function App() {
//   const userLeft=[
//     {
//       firstName: "Park1",
//       lastName: "Chase-young",
//       nickName: "Rose",
//       avatarUrl: "/images/",
//       profile: "",
//     }
//   ]
//   return (
//     <>
//       <img src="https://vcdn-giaitri.vnecdn.net/2020/10/18/main-qimg-0382435c04d3012b3370-2771-8312-1602985058.jpg"></img>
//       <p>Nguyễn Thế Minh Quân</p>
//       <p>Nam</p>
//       <p>28/3/1993</p>
//     </>
//   );
// }
// const TEXT__INTRO = `Park Chae-young (tiếng Hàn: 박채영; tên tiếng Anh: Roseanne Park, sinh ngày 11 tháng 2 năm 1997),
//   thường được biết đến với nghệ danh Rosé (Hangul: 로제)[2] là nữ ca sĩ người New Zealand gốc Hàn Quốc,
//   thành viên của nhóm nhạc nữ Blackpink do YG Entertainment thành lập và quản lý.`;

// const cardStyle = {
//   width: "50%",
//   height: "500px",
//   margin: "3% auto",
// };

// const user = {
//   firstName: "Park",
//   lastName: "Chae-young",
//   nickName: "Rosé",
//   avatarUrl: "/images/Rose-Elle01.jpeg",
//   profile: "https://www.instagram.com/roses_are_rosie/",
// };

// const userLeft = [
//   {
//     firstName: "Park1",
//     lastName: "Chae-young",
//     nickName: "Rosé",
//     avatarUrl: "/images/Rose-Elle01.jpeg",
//     profile: "https://www.instagram.com/roses_are_rosie/",
//   },
//   {
//     firstName: "Park2",
//     lastName: "Chae-young",
//     nickName: "Rosé",
//     avatarUrl: "/images/Rose-Elle01.jpeg",
//     profile: "https://www.instagram.com/roses_are_rosie/",
//   },

//   {
//     firstName: "Park3",
//     lastName: "Chae-young",
//     nickName: "Rosé",
//     avatarUrl: "/images/Rose-Elle01.jpeg",
//     profile: "https://www.instagram.com/roses_are_rosie/",
//   },
// ];

// let gotoProfile = (
//   <a href={user.profile} className="btn btn-primary">
//     More... {user.nickName}
//   </a>
// );
// let introduction = React.createElement(
//   "p",
//   { className: "card-text modify__color" },
//   TEXT__INTRO
// );

// function render(user) {
//   return (
//     <React.Fragment>
//       <div className="card" style={cardStyle}>
//         <img
//           className="card-img-top"
//           src={user.avatarUrl}
//           width="200"
//           height="200"
//           alt={formatName(user)}
//           style={{
//             objectFit: "contain",
//           }}
//         ></img>
//         <div className="card-body">
//           <h5 className="card-title">{formatName(user)}</h5>
//           {introduction}
//           {gotoProfile}
//         </div>
//       </div>
//     </React.Fragment>
//   );
// }

// function formatName(user) {
//   return user.firstName + " " + user.lastName;
// }

// function Intro() {
//   return (
//     <>
//       <div className="row">
//         <div className="col-md-6">{userLeft.map((u) => render(u))}</div>
//         <div className="col-md-6">{[...Array(3)].map(() => render(user))}</div>
//       </div>
//     </>
//   );
// }
// const user = [
//   {
//     id: 1,
//     firstName: "Park1",
//   },
//   {
//     id: 2,
//     firstName: "Park2",
//   },
//   {
//     id: 3,
//     firstName: "Park3",
//   },
//   {
//     id: 4,
//     firstName: "Park4",
//   },
// ];
// const render = (params) => {
//   return (
//     <>
//       <p {params.id}></p>
//       <p style={{ color:params.id % 2 === 0 ? "red" : "green"}}>{params.firstName}</p>
//     </>
//   );
// };
// function App() {
//   return <>{user.map((params) => render(params))}</>;
// }
// const data ={
//     id:1,
//     text: "Data 1",
//     color: "green",
// };
// const arrayData = [
//     { id: 1, name: "Data 01" },
//     { id: 2, name: "Data 02" },
//     { id: 3, name: "Data 03" },
//   ];

// const arrayColor = [
//     { id: 1, name: "red" },
//     { id: 2, name: "blue" },
//     { id: 3, name: "green" },
//   ];

// function App() {
//     return(
//         <Bai1 input={data} number={1}/>
//         <ColorExam data={arrayData} color={arrayColor}/>
//     )
// }
function App() {
  return (
    <>
      {/* <BB01 /> */}
      {/* <BB02 /> */}
      {/* <Header /> */}
      {/* <S2BB01 /> */}
      {/* <Lifecyclehook /> */}
      {/* <Form /> */}
      {/* <Router /> */}
      <Navi />
    </>
  );
}

export default App;
