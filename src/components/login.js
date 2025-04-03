import React, { useState }from "react";
import { useNavigate } from 'react-router-dom';


import "../css/navbar.css";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({ login: null }); 

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

//username: admin123@gmail.com , password : admin123

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      } else {
        console.log("You are logged In successfully");
        showRegistrationSuccessMessage()
        window.localStorage.setItem("token",formData.data);
        if (formData.email === "admin123@gmail.com" && formData.password === "admin123") {
          navigate("/admin");
        } else {
          window.location.href = "/contact";
        }
      }
    } catch (error) {
      console.error(error);
      console.log("From client");
      setErrors({ login: "Error in login" });

    }
  };

function showRegistrationSuccessMessage() {
  var successDiv = document.getElementById("registerSuccess");
  if (successDiv) {
      successDiv.style.display = "block"; 
 }}

  return (
    <div className="login-form">
      <form
        className="modal-content animate"
        id="form"
        action="/login"
        method="POST"
      >
      
          <div className="container-log" style={{ textAlign: "center" }}>
            <h1>Welcome Back</h1>
            <h3>Login</h3><br/><br/>
            <div className="input-group-nav">
              <div className="input-group">
                <input
                  type="text"
                  id="email1"
                  name="email"
                  placeholder="Email id"
                  autoComplete="off"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div><br/>
              <div className="input-group">
                <input
                  type="password"
                  id="password1"
                  name="password"
                  placeholder="Password"
                  autoComplete="off"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              <br />
              <div className={`error ${errors.login && 'display-error'}`} style={{ paddingTop:"0px",paddingLeft:"10px" }}>{errors.login}</div>
              <div class="success register-success">Sucessfully loggedIn</div>
              <br />
              <button
                type="button"
                id="btn-login2"
                onClick={submitForm}
                style={{ width: "356px" ,alignContent:'Center', marginLeft:'46px'}}
              >
                Login
              </button>
              <br />
              <br />
              <div
                className="container-sign"
                style={{ backgroundColor: "#d9fcf9" }}
              >
                <h3 style={{ display: "inline-block",cursor: "pointer" }} className="log">
                 <a href="/">   Cancel </a>
                </h3>
                <h3 style={{ display: "inline-block" ,cursor: "pointer" }} className="psw">
                  <a href="/register"> SignUp </a>
                </h3>
              </div>
            </div>
          </div>
       
      </form>
    </div>
  );
}

export default Login;
