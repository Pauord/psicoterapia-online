//@ts-check
import React from "react";
import { useHistory } from "react-router-dom";
// import portada from "../img/portada.jpg";
import Carousel from "../carousel/Carrusel";
import NavBar from "../navBar/NavBar";
import Carrusel from "../carousel/Carrusel";

function Home() {
  return (
    <>
      <NavBar />
      <Carrusel />
    </>
  );
}

export default Home;
