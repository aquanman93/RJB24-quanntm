import React from "react";
import logo from "./logo.svg";
import "./App.css";

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
const TEXT__INTRO = `Park Chae-young (tiếng Hàn: 박채영; tên tiếng Anh: Roseanne Park, sinh ngày 11 tháng 2 năm 1997), 
  thường được biết đến với nghệ danh Rosé (Hangul: 로제)[2] là nữ ca sĩ người New Zealand gốc Hàn Quốc, 
  thành viên của nhóm nhạc nữ Blackpink do YG Entertainment thành lập và quản lý.`;

const cardStyle = {
  width: "50%",
  height: "500px",
  margin: "3% auto",
};

const user = {
  firstName: "Park",
  lastName: "Chae-young",
  nickName: "Rosé",
  avatarUrl: "/images/Rose-Elle01.jpeg",
  profile: "https://www.instagram.com/roses_are_rosie/",
};

const userLeft = [
  {
    firstName: "Park1",
    lastName: "Chae-young",
    nickName: "Rosé",
    avatarUrl: "/images/Rose-Elle01.jpeg",
    profile: "https://www.instagram.com/roses_are_rosie/",
  },
  {
    firstName: "Park2",
    lastName: "Chae-young",
    nickName: "Rosé",
    avatarUrl: "/images/Rose-Elle01.jpeg",
    profile: "https://www.instagram.com/roses_are_rosie/",
  },

  {
    firstName: "Park3",
    lastName: "Chae-young",
    nickName: "Rosé",
    avatarUrl: "/images/Rose-Elle01.jpeg",
    profile: "https://www.instagram.com/roses_are_rosie/",
  },
];

let gotoProfile = (
  <a href={user.profile} className="btn btn-primary">
    More... {user.nickName}
  </a>
);
let introduction = React.createElement(
  "p",
  { className: "card-text modify__color" },
  TEXT__INTRO
);

function render(user) {
  return (
    <React.Fragment>
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src={user.avatarUrl}
          width="200"
          height="200"
          alt={formatName(user)}
          style={
            {
              objectFit: 'contain'
            }
          }
        ></img>
        <div className="card-body">
          <h5 className="card-title">{formatName(user)}</h5>
          {introduction}
          {gotoProfile}
        </div>
      </div>
    </React.Fragment>
  );
}

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

function Intro() {
  return (
    <>
      <div className="row">
        <div className="col-md-6">{userLeft.map((u) => render(u))}</div>
        <div className="col-md-6">{[...Array(3)].map(() => render(user))}</div>
      </div>
    </>
  );
}


export default Intro;
