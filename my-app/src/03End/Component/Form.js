import React, { useState } from "react";
function Form(props) {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const getValue = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    setUserInfo((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };
  const sendValue = (event) => {
    event.preventDefault();
    props.receiveValue(userInfo);
  };
  const btnDisable = () => {
    if (userInfo.email === "" || userInfo.password === "") {
      return "disabled";
    } else {
      return "";
    }
  };
  return (
    <form>
      <div>
        <label className="form-label">User</label>
        <input
          type="text"
          name="email"
          className="form-control"
          onChange={getValue}
        />
      </div>
      <div className="mt-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          onChange={getValue}
        />
      </div>
      <div className="mt-3">
        <button
          type="submit"
          className={"btn btn-success bg-success " + btnDisable()}
          onClick={sendValue}
        >
          Login
        </button>
      </div>
    </form>
  );
}
export default Form;
