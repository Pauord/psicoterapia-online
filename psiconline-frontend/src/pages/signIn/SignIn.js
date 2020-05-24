//@ts-check
import React from "react";
import NavBar from "../../components/navBar/NavBar";
import "./signIn.css";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <>
      <NavBar />

      <form className="border border-light p-5"/>

    <p className="h4 mb-4 text-center">Sign in</p>

    <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="E-mail"/>

    <input type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Password"/>

    <div className="d-flex justify-content-between">
        <div>
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember"/>
                <label className="custom-control-label">Remember me</label>
            </div>
        </div>
        <div>
            <a href="">Forgot password?</a>
        </div>
    </div>

    <button className="btn btn-info btn-block my-4" type="submit">Sign in</button>

    <div className="text-center">
        <p>Not a member?
            <a href="">Register</a>
        </p>

        <p>or sign in with:</p>
        <a type="button" className="light-blue-text mx-2">
            <i className="fab fa-facebook-f"></i>
        </a>
        <a type="button" className="light-blue-text mx-2">
            <i className="fab fa-twitter"></i>
        </a>
        <a type="button" className="light-blue-text mx-2">
            <i className="fab fa-linkedin-in"></i>
        </a>
        <a type="button" className="light-blue-text mx-2">
            <i className="fab fa-github"></i>
        </a>
    </div>
    </>
  );
}

export default SignIn;
