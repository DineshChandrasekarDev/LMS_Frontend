import React from "react";
import "../../css/auth/RegisterForm.css"
import { useState } from "react";
import { FaEye,FaEyeSlash } from "react-icons/fa";
import axios from "axios";
function RegisterForm({ onLogin }) {
  const[showPassword,setshowPassword]=useState(false);
  const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [username, setUsername] = useState("");
const [mobile, setMobile] = useState("");
const handleRegister = async () => {

  if (!name || !email || !password || !confirmPassword) {
    alert("Please fill all fields");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {
    const response = await axios.post(
      "http://localhost:8080/api/auth/register",
      {
        name,
        username,
        mobile,
        email,
        password,
      }
    );

    alert(response.data);

    if (response.data === "Registration Success") {
      onLogin(); // Go back to Login Form
    }

  } catch (error) {
    console.error(error);
    alert("Registration Failed");
  }
};
  return (
    <div className="login-card">

      <h3 className="mb-4">Create Account</h3>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Full Name"
        value={name}
  onChange={(e) => setName(e.target.value)}
      />

      <input
  type="text"
  className="form-control mb-3"
  placeholder="Username"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
/>
      <input
        type="email"
        className="form-control mb-3"
        placeholder="Email Address"
          value={email}
  onChange={(e) => setEmail(e.target.value)}
      />

      <input
  type="text"
  className="form-control mb-3"
  placeholder="Mobile Number"
  value={mobile}
  onChange={(e) => setMobile(e.target.value)}
/>
   <div className="password-wrapper">
      <input
        type={showPassword?"text":"password"}
        className="form-control mb-3"
        placeholder="Password"
        value={password}
  onChange={(e) => setPassword(e.target.value)}
      />
       <span className="password-toggle" onClick={()=>setshowPassword(!showPassword)}>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
</div>
       <div className="password-wrapper">
      <input
  type={showPassword ? "text" : "password"}
  className="form-control mb-3"
  placeholder="Confirm Password"
  value={confirmPassword}
  onChange={(e) => setConfirmPassword(e.target.value)}
/>
      <span className="password-toggle" onClick={()=>setshowPassword(!showPassword)}>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
</div>
      <button className="btn login-btn"   onClick={handleRegister}
>
        Create Account
      </button>

      <div className="text-center mt-3">
        Already have an account?
        <button
          className="btn btn-link p-0 ms-1"
          onClick={onLogin}
        >
          Log In
        </button>
      </div>

    </div>
  );
}

export default RegisterForm;