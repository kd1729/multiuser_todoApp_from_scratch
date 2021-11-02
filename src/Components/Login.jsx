import React from "react";

function loginForm(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email, password);
}

const Login = () => {
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
