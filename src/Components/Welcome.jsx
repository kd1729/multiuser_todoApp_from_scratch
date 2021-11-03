import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "./Firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import { query, getDocs, where } from "firebase/firestore";
import { nanoid } from "nanoid";
import { Link, useHistory,Redirect } from "react-router-dom";
import Login from "./Login";

const auth = getAuth();
const usersRef = collection(db, "users");

const Welcome = () => {
  async function submitForm(e) {
    e.preventDefault();
    const name = e.target.Name.value;
    const email = e.target.Email.value;
    const password = e.target.Password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        alert("Welcome " + name + " Signup Successful !");
        setDoc(doc(usersRef, nanoid()), {
          Name: name,
          Email: email,
          Password: password,
        });
      })
      .catch((error) => {
        alert("This email is already registerd ! Please Login.");
      });
    document.getElementById("form").reset();
  }

  return (
    <div className="welcome">
      <h1 className="Header">Sign Up Page</h1>
      <form className="signupForm" id="form" action="" onSubmit={submitForm}>
        <label htmlFor="name" className="formHeading">
          {" "}
          Name :{" "}
        </label>{" "}
        <br />
        <input
          className="Name"
          type="text"
          name="Name"
          id="name"
          required
        />{" "}
        <br />
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
        <input className="Submit" type="submit" value="Sign Up" /> <br />
      </form>
      
    </div>
  );
};

export default Welcome;
