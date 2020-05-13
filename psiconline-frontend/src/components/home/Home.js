//@ts-check
import React from "react";
import { useHistory } from "react-router-dom";
// import portada from "../img/portada.jpg";
import Carousel from "../Slides/Slidesl";
import NavBar from "../navBar/NavBar";
import Section from "../section/Section";

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
