import React, { useState } from "react";
import Form from "./Component/Form";
import { useNavigate } from "react-router-dom";
function Login() {
  let navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: "admin",
    password: "admin",
  });
  const receiveValue = (value) => {
    let newUserInfo = userInfo;
    if (
      value.email === newUserInfo.email &&
      value.password === newUserInfo.password
    ) {
      navigate("/Project");
    } else {
      alert("Sai user hoac mat khau");
    }
  };
  return (
    <div className="container-md">
      <div className="login-form-container mt-3">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Login please!</h2>
          </div>
          <div className="card-body">
            <Form receiveValue={receiveValue} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
