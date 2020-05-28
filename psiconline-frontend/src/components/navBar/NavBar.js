//@ts-check
import React from "react";
import { Link } from "react-router-dom";
import "../navBar/navBar.css";
import { Navbar, Form, Button, Nav, NavDropdown } from "react-bootstrap";

function NavBar() {
  // const history = useHistory();

  // const handleClick = () => {
  //   history.push("/");
  // };

  return (
    <>
      <nav className="mb-1 navbar navbar-expand-lg navbar-light sticky-top default-color">
        <a className="navbar-brand" href="#">
          PSICONLINE
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent-333"
          aria-controls="navbarSupportedContent-333"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent-333"
        >
          <div className="contenedor-nav d-flex justify-content-center align-items-center">
            <ul className="navbar-nav mr-auto align-items-center">
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
                  className="nav-link dropdown-toggle"
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
          <ul className="navbar-nav ml-auto nav-flex-icons">
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
                    <Link to="/signIn" className="nav-link">
                      Ingresar
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/adm" className="nav-link">
                      Administrar
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      {/* <Navbar
        collapseOnSelect
        expand="lg"
        className="navbar fixed-top align-items-center"
        id="menu"
      >
        <div className="logo">
          <Navbar.Brand>
            <Link to="/">
              <img
                src={logo}
                style={{ width: 90, marginTop: -7, marginLeft: 20 }}
              />
            </Link>
          </Navbar.Brand>
        </div>
        <div className="barra-menu">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggle" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
            <Nav.Link>
                <Link to="/" className="link">
                 Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about" className="link">
                  Sobre mí
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/blog" className="link">
                  Blog
                </Link>
              </Nav.Link>
              <NavDropdown
                title="Trabajemos juntxs"
                id="collasible-nav-dropdown"
                className="link-dropdown"
              >
                <NavDropdown.Item>
                  <Link to="/turnos" className="link-down">
                    Terapia online
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/talleres" className="link-down">
                    Talleres
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/eventos" className="link-down">
                    Eventos
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <Link to="/signIn" className="link">
                  Ingresá
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/signUp" className="link">
                  Registrate
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/adm" className="link">
                  Administrar
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <div className="espacio" style={{ height: 90 }}></div> */}
    </>
  );
}

export default NavBar;
