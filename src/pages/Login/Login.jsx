import React, { useState } from "react";
import "./Login.css";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
function Login() {
  const [activeButton, setActiveButton] = useState("login");
  return (
    <main className="login-div">
      <section className="section">
        <div className="right">
          <div className="para">
            <h1>Welcome Back :)</h1>
            <p>
              To keep connected with us please Login with your personal <br />
              information by email address and password 🔔
              <div className="links"></div>
            </p>
          </div>
          <div className="input">
            <div className="btn-div">
              <TextField
                type="email"
                className="btn"
                id="outlined-basic"
                label="Email Address"
                variant="outlined"
              />
              <TextField
                type="password"
                className="btn"
                id="outlined-basic"
                label="Password"
                variant="outlined"
              />
              <span>
                <label htmlFor="remember">
                  <input id="remember" type="checkbox" checked />
                  Remember Me
                </label>
                <a>Forget Password ?</a>
              </span>
              <div className="login-btn">
                <button
                  className={`btn-1 ${
                    activeButton === "login" ? "active" : ""
                  }`}
                  onClick={() => setActiveButton("login")}
                >
                  Login Now
                </button>
                <button
                  className={`btn-2 ${
                    activeButton === "create" ? "active" : ""
                  }`}
                  onClick={() => setActiveButton("create")}
                >
                  Create Account
                </button>
              </div>
            </div>
            <div className="links">
              <p>Or you can join with</p>
              <div className="link-btn">
                <a href="https://www.google.com/">
                  <GoogleIcon></GoogleIcon>
                </a>
                <a href="https://www.facebook.com/">
                  <FacebookIcon></FacebookIcon>
                </a>
                <a href="https://www.twitter.com/">
                  <TwitterIcon></TwitterIcon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;
