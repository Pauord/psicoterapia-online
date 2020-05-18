//@ts-check
import React from "react";
import NavBar from "../../components/navBar/NavBar";
import "../signUp/signUp.css";


function SignUp() {
  return (
    <>
      <NavBar />

      <div>
        <form className="login">
          <h3>Registrate</h3>

          <div className="form-group">
            <label>Nombre</label>
            <input
              type="text"
              className="form-control"
              placeholder="ingrese su nombre"
            />
          </div>
          <div className="form-group">
            <label>Apellido</label>
            <input
              type="text"
              className="form-control"
              placeholder="ingrese su apellido"
            />
          </div>
          <div className="form-group">
            <label>Fecha de nacimiento</label>
            <input
              type="date"
              className="form-control"
              placeholder="ingrese su fecha de nacimiento"
            />
          </div>
          <div className="form-group">
            <label>Usuario</label>
            <input
              type="text"
              className="form-control"
              placeholder="ingrese un nombre de usuario"
            />
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control"
              placeholder="Ingrese password"
            />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
               Deseo recibir newsletters
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
