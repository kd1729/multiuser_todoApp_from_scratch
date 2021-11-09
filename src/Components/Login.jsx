import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import App from "../App";

const auth = getAuth();

const Login = () => {
  const [user, setUser] = useState({
    id: "",
    email: "",
  });

  function loginForm(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const id = email.split("@")[0];

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser({
          email: email,
          id: id,
        });
      })
      .catch((error) => {
        // Handle Errors here.
        if (error.code === "auth/wrong-password") {
          alert("Wrong password.");
        } else {
          alert(error.message);
        }
      });
  }

  if (user.id !== "") return <App id={user.id} email={user.email} />;

  return (
    <>
      <h1 className="Header">Log In Page</h1>
      <form className="loginForm" id="form" action="" onSubmit={loginForm}>
        <label htmlFor="email" className="formHeading">
          {" "}
          Email :{" "}
        </label>{" "}
        <br />
        <input
          className="Email"
          type="text"
          name="Email"
          id="email"
          required
        />{" "}
        <br />
        <label htmlFor="password" className="formHeading">
          {" "}
          Password :{" "}
        </label>{" "}
        <br />
        <input
          className="Password"
          type="password"
          name="Password"
          id="password"
          required
        />{" "}
        <br />
        <input className="Submit" type="submit" value="Log In" /> <br />
        <Link to="/Signup">
          <h3 className="signupLink">To Signup, Click here</h3>
        </Link>
        <Link to="/forgotPassword">
          <h3 className="forgotPasswordLink">Forgot Password</h3>
        </Link>
      </form>
    </>
  );
};

export default Login;
