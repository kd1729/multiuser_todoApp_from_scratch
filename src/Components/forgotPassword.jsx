import React from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Link } from "react-router-dom";

const forgotPassword = () => {

  async function resetPassword(e) {
    e.preventDefault();
    const auth = getAuth();
    const email = e.target.email.value;
    console.log(email);
    await sendPasswordResetEmail(auth, email, {
      url: "https://multiuser-todo-app.netlify.app",
    }).then(() => {
      alert("Email sent ! Check your email and reset password.");
    }).catch((error) => {
      alert(error);
    });
  }

  return (
    <>
      <h1 className="Header">Password Reset Page</h1>
      <form
        className="forgotPasswordForm"
        id="form"
        action=""
        onSubmit={resetPassword}
      >
        <label htmlFor="email" className="formHeading">
          {" "}
          Email :{" "}
        </label>{" "}
        <br />
        <input className="Email" type="text" name="Email" id="email" required />
        <input
          className="Submit"
          type="submit"
          value="Send Reset Password Link"
        />{" "}
        <br />
        <Link to="/Login">
          <h3 className="loginLink">To Login, Click here</h3>
        </Link>
      </form>
    </>
  );
};

export default forgotPassword;
