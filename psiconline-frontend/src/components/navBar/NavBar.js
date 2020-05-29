//@ts-check
import React from "react";
import { Link } from "react-router-dom";
import "../navBar/navBar.css";
import { Navbar, Form, Button, Nav, NavDropdown } from "react-bootstrap";
import logo from "../../img/charla.svg";

function NavBar() {
  // const history = useHistory();

  // const handleClick = () => {
  //   history.push("/");
  // };

  return (
    <>
      <nav
        className="mb-1 navbar navbar-expand-lg fixed-top "
        style={{
          color: "swhitesmoke",
          backgroundColor: "#73b5af",
          fontFamily: "Montserrat",
        }}
      >
        <Link to="/" className="navbar-brand">
          <img src={logo} style={{ width: 40, marginRight: 5 }} />
          PSICONLINE{" "}
        </Link>

        <button
          className="navbar-toggler"
          style={{ color: "whitesmoke" }}
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent-333"
          aria-controls="navbarSupportedContent-333"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon color-smoke"></span>
        </button>
        <div
          className="collapse navbar-collapse color-smoke d-flex justify-content-between"
          id="navbarSupportedContent-333"
        >
          <div className="contenedor-nav d-flex justify-content-center align-items-center">
            <ul className="navbar-nav align-items-end contenedor-redes">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Home
                  {/* <span className="sr-only">(current)</span> */}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  Sobre mí
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link">
                  Blog
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle color-smoke"
                  id="navbarDropdownMenuLink-333"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Más info
                </a>
                <div
                  className="dropdown-menu dropdown-default"
                  aria-labelledby="navbarDropdownMenuLink-333"
                >
                  <Link to="/talleres" className="dropdown-item">
                    Workshops
                  </Link>
                  <Link to="/eventos" className="dropdown-item">
                    Webinars
                  </Link>
                  <Link to="/turnos" className="dropdown-item">
                    Solicitá un turno
                  </Link>
                </div>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav d-flex justify-content-center align-items-center nav-flex-icons">
            <li className="nav-item">
              <a className="nav-link waves-effect waves-light">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link waves-effect waves-light">
                <i className="fab fa-google-plus-g"></i>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink-333"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-user"></i>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right dropdown-default"
                aria-labelledby="navbarDropdownMenuLink-333"
              >
                <ul>
                  <li className="nav-item">
                    <Link to="/signIn" className="nav-link text-dark">
                      Ingresar
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link to="/adm" className="nav-link text-dark">
                      Administrar
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <div style={{ height: 56 }}></div>
    </>
  );
}

export default NavBar;
