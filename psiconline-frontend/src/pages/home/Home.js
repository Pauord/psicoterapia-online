//@ts-check
import React from "react";
import NavBar from "../../components/navBar/NavBar";
import fondo from "../../img/escritorio2.jpg";
import "./home.css";
import Footer from "../../components/footer/Footer";
import ParallaxComponent from "../../components/parallax/ParallaxComponent";
import JumbotronComponent from "../../components/jumbotron/JumbotronComponent";
import Section from "../../components/section/Section";

function Home() {
  return (
    <>
      
        <NavBar />
        <ParallaxComponent />
      

      <JumbotronComponent />

      <Section />

      <Footer />
    </>
  );
}

export default Home;
