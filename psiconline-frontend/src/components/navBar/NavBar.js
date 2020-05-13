//@ts-check
import React from "react";
import { Link, Switch, Route, useHistory } from "react-router-dom";
import Turnos from "../turnos/Turnos";
import Blog from "../blog/Blog";
import SignIn from "../signIn/SignIn";
import Home from "../home/Home";
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
              <img src={logo} style={{ width: 120, marginTop: -7 , marginLeft: 20}} />
            </Link>
          </Navbar.Brand>
        </div>
        <div className="barra-menu">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link>
                <Link to="/about" className="link">Sobre mí</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/blog" className="link">Blog</Link>
              </Nav.Link>
              <NavDropdown
                title="Trabajemos juntxs"
                id="collasible-nav-dropdown"
                className="link-down"
              >
                <NavDropdown.Item>
                  <Link to="/turnos" className="link-down">Terapia online</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/talleres"className="link-down">Talleres</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/eventos" className="link-down">Eventos</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <Link to="/signIn" className="link">Sign In</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/createArticle" className="link">Crear un articulo</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <div className="espacio" style={{ height: 115 }}></div>
    </>
  );
}

export default NavBar;
