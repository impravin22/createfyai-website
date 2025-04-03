import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

const scrollToTop = () => {
  window.scrollTo({
      top: 0,
      behavior: "smooth" 
  });
};

function SignUp() {
    
     const [isFormVisible, setFormVisible] = useState(false); 
  
    const [formData, setFormData] = useState({
      number: '',
      email: '',
      password: '',
      rpassword: '',
    });
   
    const [errors, setErrors] = useState({
      number: '',
      email: '',
      password: '',
      rpassword: '',
    });
  
    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }

    const validateEmail = (email) => {
      if(email.trim() ===""){
        return "Enter your email id";
      }else if(!email.match("^[0-9a-zA-Z_%!()]+\\@[a-z]+\\.[a-z]{2,4}$")){
        return "Enter a valid email id";
       }else
         return "";
    }

    const validateNumber = (number) => {
      if(number.trim() ==="")
       return "Enter your mobile number";
      else if(!number.match("^[1-9][0-9]{9}$"))
       return "Enter the valid number with 10 digits";
      else
        return "";
    }

    const validatePassword = (password) => {
       if(password.trim() ==="")
         return "Password can't be empty";
      else if(password.length<6)
         return "Password length must be greater than 6";
      else
         return "";
    }

    const validateRPassword = (rpassword) => {
      if (rpassword !== formData.password) {
        return "Passwords do not match";
      }else
      return "";
    }
  
    const submitForm = async () => {
      try {
       console.log("Checking...")
        const emailError = validateEmail(formData.email);
        const numberError = validateNumber(formData.number);
        const passwordError = validatePassword(formData.password);
        const rpasswordError = validateRPassword(formData.rpassword);
    
        if (emailError === "" && numberError === "" && passwordError === "" && rpasswordError === "") {
         
          console.log("No errors.");
          setErrors({
            email: "",
            number: "",
            password: "",
            rpassword: ""
          });
      
        const response = await fetch('http://localhost:4000/register', {
          method: 'POST',
          crossDomain:true,
          headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            "Access-Control-Allow-Origin":"*",
          },
          body: JSON.stringify(formData),
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error);
        } else {
          console.log("Stored in db");
          showRegistrationSuccessMessage() ;
          window.location.href = "/contact";
        }
      } else {
        console.log("Has error..");
        setErrors({
          email: emailError,
          number: numberError,
          password: passwordError,
          rpassword: rpasswordError
           
        });
       
        console.log(errors.number);
        console.log(errors.email);
        console.log(errors.password);
        console.log(errors.rpassword);
     
      }
      } catch (error) {
        console.error(error);
        alert("Error in inputs from signing..");
      }
    };
    function showRegistrationSuccessMessage() {
      var successDiv = document.getElementById("registerSuccess");
      if (successDiv) {
          successDiv.style.display = "block"; 
     }}
    

  return (
    <div className="login-form" style={{background:"Transparent"}}>
       <form
          className="modal-content animate"
          id="form"
        
        
        >
          <div className="imgcontainer">
            <span
              onClick={() => setFormVisible(false)}
              className="close"
              title="Close Modal"
            >
              &times;
            </span>
          </div>
          <div className="container-log" style={{ textAlign: "center" }}>
            <h2>Signup Page</h2>
            <div className="input-group-nav">
              <input  
                type="number"
                id="number"
                name="number"
                placeholder="Enter phone number..."
                autoComplete="off"
                value={formData.number}
                onChange={handleInputChange}
              />
             <span className={`error ${errors.number && 'display-error'}`} style={{ paddingTop:"0px",paddingLeft:"10px" }}>{errors.number}</span>

            </div>
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
             <span className={`error ${errors.email && 'display-error'}`}>{errors.email}</span>

            </div>
      
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
             <span className={`error ${errors.password && 'display-error'}`}>{errors.password}</span>

            </div>
            <div className="input-group">
              <input
                type="password"
                id="rpassword"
                name="rpassword"
                placeholder="Re-enter Password"
                autoComplete="off"
                value={formData.rpassword}
                onChange={handleInputChange}
              />
            <span className={`error ${errors.rpassword && 'display-error'}`}>{errors.rpassword}</span>

            </div><br/>
            <button
              type="button"
              id="btn-login2"
             onClick={submitForm}
              style={{ width: "auto" }}>
             SignUp
            </button>
            <div class="success register-success">Sucessfully Registered</div>
            <br /><br/>
            <div className="container-sign" style={{ backgroundColor: "#d9fcf9" }}>
             <h3 style={{display:'inline-block'}} className="log" onClick={scrollToTop}>  <Link to="/login">Login</Link> </h3> 
             <h3 style={{display:'inline-block'}} className="psw">
                 <a href="/"> Forgot password?</a>
              </h3>
             
            </div>
          </div>
        </form>
    </div>
  );
}

export default SignUp;

