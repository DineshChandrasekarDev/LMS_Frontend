import React, { useState } from "react";
import "../../css/auth/LoginForm.css";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import RegisterForm from "./RegisterForm";
import axios from "axios";

function LoginForm({ setIsLoggedIn })  {
  const [showPassword, setShowPassword] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        {
          email,
          password,
        }
      );

 if (response.data === "Login Success") {
      localStorage.setItem("loggedIn", "true");
        setIsLoggedIn(true);

    }
    } 
    catch (error) {
      console.error(error);
      alert("Login Failed");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="logo">
          <h3>GlobalTech</h3>
        </div>

        <div className="row h-100">
          {/* Left Side */}
          <div className="col-lg-6 d-flex align-items-center">
            <div className="welcome-content">
              <h1>
                Welcome to the
                <br />
                GlobalTech hub
              </h1>

              <p>
                This is our hub where work gets done.
                Log in to collaborate with your team
                in real-time.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            {showRegister ? (
              <RegisterForm onLogin={() => setShowRegister(false)} />
            ) : (
              <div className="login-card">
                <div className="signup-text">
                  Don't have an account?
                  <button
                    className="btn btn-link p-0 ms-1"
                    onClick={() => setShowRegister(true)}
                  >
                    Create one
                  </button>
                </div>

                <h3 className="mb-4">Log in</h3>

                {/* Email */}
                <input
                  type="email"
                  className="form-control mb-3"
                  placeholder="Email or Username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                {/* Password */}
                <div className="password-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <span
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>

                <button
                  className="btn login-btn mt-3"
                  onClick={handleLogin}
                >
                  Log In
                </button>

                <div className="forgot-password">
                  Forgot your password?
                </div>

                <div className="divider">
                  <span>or log in with email</span>
                </div>

                <div className="social-buttons">
                  <button className="btn btn-light">
                    <FaLinkedin className="social-icon microsoft" />
                    LinkedIn
                  </button>

                  <button className="btn btn-light">
                    <FcGoogle className="social-icon" />
                    Google
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="footer-links">
          © 2025 GlobalTech Inc.
          <span>About</span>
          <span>Privacy Policy</span>
          <span>Terms</span>
          <span>Help</span>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;