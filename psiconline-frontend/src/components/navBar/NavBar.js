//@ts-check
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo9.3.png";
import "../navBar/navBar.css";
import { Navbar, Form, Button, Nav, NavDropdown } from "react-bootstrap";

function NavBar() {
  // const history = useHistory();

  // const handleClick = () => {
  //   history.push("/");
  // };

  return (
    <>
      <Navbar
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
      <div className="espacio" style={{ height: 90 }}></div>
    </>
  );
}

export default NavBar;
