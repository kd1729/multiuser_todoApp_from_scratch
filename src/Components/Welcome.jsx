import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "./Firebase";
import { collection, doc, setDoc } from "firebase/firestore";
// import { query, getDocs, where } from "firebase/firestore";
import { useState } from "react";
import Login from "./Login";
// import { Link, useHistory, Redirect } from "react-router-dom";

const auth = getAuth();
const usersRef = collection(db, "users");

const Welcome = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
  });

  async function submitForm(e) {
    e.preventDefault();

    const name = e.target.Name.value;
    const email = e.target.Email.value;
    const id = email.split("@")[0];
    const password = e.target.Password.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        setUser({
          id,
          name,
          email,
          password,
        });

        setDoc(doc(usersRef, id), {
          Name: name,
          Email: email,
          Password: password,
          id: id,
        });

        alert("Welcome " + name + " Signup Successful ! Please Login now.");

      })
      .catch((error) => {
        // Handle Errors here.
        if (error.code === "auth/email-already-in-use") {
          alert("Email already in use. Please Login !");
        } else {
          alert(error.message); 
        }
      });
    document.getElementById("form").reset();
  }

  if (user.id !== "") {
    return (
      <Login
        id={user.id}
      />
    );
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
