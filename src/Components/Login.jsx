import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import App from "../App";

const auth = getAuth();
const Login = (props) => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
  });

  function loginForm(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  if (user.id !== null)
    return (
      <App
        id={user.id}
        name={user.name}
        email={user.email}
        password={user.password}
      />
    );

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
      </form>
    </>
  );
};

export default Login;
