//@ts-check
import React from "react";
import NavBar from "../../components/navBar/NavBar";
import "./signIn.css";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <>
      <NavBar />
      <div className="body-signIn">
        <form className="border border-light p-5 login">
          <h3 className="h4 mb-4 text-center">Login</h3>

          <input
            type="email"
            id="defaultLoginFormEmail"
            className="form-control mb-4"
            placeholder="E-mail"
          />

          <input
            type="password"
            id="defaultLoginFormPassword"
            className="form-control mb-4"
            placeholder="Password"
          />


          <button className="btn btn-info btn-block my-4 boton-sandy" style={{backgroundColor: "sandybrown",
    borderColor: "sandybrown"}}
          type="submit">
           ingresar
          </button>

          <div className="text-center">
            <p>
              No estas registrado/a?  
              <Link to="/signUp"> Registrate</Link>
            </p>

            <p>o ingresa con:</p>
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
        </form>
      </div>
    </>
  );
}

export default SignIn;
