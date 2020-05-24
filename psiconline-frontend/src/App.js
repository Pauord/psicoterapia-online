//@ts-check
import React from "react";
import "./App.css";
import Home from "./pages/home/Home";
import Turnos from "./pages/turnos/Turnos";
import Blog from "./pages/blog/Blog";
import SignIn from "./pages/signIn/SignIn";
import About from "./pages/aboutMe/About";
import Talleres from "./pages/talleres/Talleres";
import Eventos from "./pages/eventos/Eventos";
import CreateArticle from "./pages/createArticle/CreateArticle";
import EditArticle from "./pages/EditArticle/EditArticle";
import SignUp from "./pages/signUp/SignUp";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Adm from "./pages/adm/Adm";

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
          <Route path="/signUp">
            <SignUp />
          </Route>
          <Route path="/createArticle">
            <CreateArticle/>
          </Route>
          <Route path="/edit/:idArticle">
            <EditArticle/>
          </Route>
          <Route path="/adm">
            <Adm/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      
    </>
  );
}

export default App;
