//@ts-check
import React from "react";
import { Link, Switch, Route, useHistory } from "react-router-dom";
import Turnos from "../turnos/Turnos";
import Blog from "../blog/Blog";
import SignIn from "../signIn/SignIn";
import Home from "../home/Home";
import logo from "/Users/RollingStudent/Desktop/Paula/Proyecto final/psiconline-frontend/src/img/8.png";
import "../navBar/navBar.css";
import { Navbar, Form, Button, Nav, NavDropdown } from "react-bootstrap";

function NavBar() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>
        <Link to="/">
          <img src={logo} style={{ width: 100, marginTop: -7 }} />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav d-flex justify-content-center aligne-center">
        <Nav className="d-flex justify-content-center">
          <Nav.Link>
            <Link to="/about">Sobre mí</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/blog">Blog</Link>
          </Nav.Link>
          <NavDropdown title="Trabajemos juntxs" id="collasible-nav-dropdown">
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
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
