//@ts-check
import React from "react";
import { useHistory } from "react-router-dom";
// import portada from "../img/portada.jpg";
import NavBar from "../../components/navBar/NavBar";
import Section from "../../components/section/Section";
import portada from "../../img/portada2.jpg";
import "./home.css"
import { CardImgOverlay } from "react-bootstrap/Card";

function Home() {
  return (
    <div className="home">
      <NavBar />
      <div className="portada">
      <img src={portada} alt="portada" 
      />
      </div>
      <Section />
    </div>
 
  );
}

export default Home;
