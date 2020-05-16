//@ts-check
import React from "react";
import "./App.css";
import Navbar from "./components/navBar/NavBar";
import Home from "./components/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import Turnos from "./components/turnos/Turnos";
import Blog from "./components/blog/Blog";
import SignIn from "./components/signIn/SignIn";
// import logo from "./img/1.png";
import About from "./components/aboutMe/About";
import Talleres from "./components/talleres/Talleres";
import Eventos from "./components/eventos/Eventos";
import LoginAdm from "./components/loginAdm/LogInAdm";
import CreateArticle from "./components/createArticle/CreateArticle";
import EditArticle from "./components/EditArticle/EditArticle";
import SignUp from "./components/signUp/SignUp";

function App() {

  return (
    <>
      
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/turnos">
            <Turnos />
          </Route>
          <Route path="/talleres">
            <Talleres />
          </Route>
          <Route path="/eventos">
            <Eventos />
            </Route>
          <Route path="/signIn">
            <SignIn />
            </Route>
          <Route path="/loginAdm">
            <LoginAdm />
          </Route>
          <Route path="/signUp">
            <SignUp />
          </Route>
          <Route path="/createArticle">
            <CreateArticle/>
          </Route>
          <Route path="/edit/:idArticle">
            <EditArticle/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      
    </>
  );
}

export default App;
