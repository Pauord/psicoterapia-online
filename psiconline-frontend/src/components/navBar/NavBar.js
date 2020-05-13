//@ts-check
import React from "react";
import { Link, Switch, Route, useHistory } from "react-router-dom";
import Turnos from "../turnos/Turnos";
import Blog from "../blog/Blog";
import SignIn from "../signIn/SignIn";
import Home from "../home/Home";
import logo from "../../img/4.png";
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
        className="navbar fixed-top"
        id="menu"
      >
        <div className="logo">
          <Navbar.Brand>
            <Link to="/">
              <img src={logo} style={{ width: 100, marginTop: -7 }} />
            </Link>
          </Navbar.Brand>
        </div>
        <div className="barra-menu">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link>
                <Link to="/about">Sobre mí</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/blog">Blog</Link>
              </Nav.Link>
              <NavDropdown
                title="Trabajemos juntxs"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link to="/turnos">Terapia online</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/talleres">Talleres</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/eventos">Eventos</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <Link to="/signIn">Sign In</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/createArticle">Crear un articulo</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <div className="espacio" style={{ height: 119 }}></div>
    </>
  );
}

export default NavBar;
