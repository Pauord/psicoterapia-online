//@ts-check
import React from "react";
import { useHistory } from "react-router-dom";
// import portada from "../img/portada.jpg";
import Carousel from "../../components/Slides/Slides";
import NavBar from "../../components/navBar/NavBar";
import Section from "../../components/section/Section";

function Home() {
  return (
    <div className="home">
      <NavBar />
      <Carousel />
      <Section />
    </div>
  );
}

export default Home;
