//@ts-check
import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import fondo from "../../img/escritorio.jpg";
import "../section/section.css";
function Section() {
  return (
    <div>
      <Jumbotron className="jumbotron" style={{ marginBottom: 0 }}> 
        <h1>Bienvenidx!</h1>
        <p>
          Quiero darte la bienvenida y contarte que me pone muy contenta que
          estés aquí. Mi apuesta es crear un espacio seguro, cómodo y accesible
          para Viajeras, Viajeros y Expats. Un espacio donde podamos
          encontrarnos y trabajar para crear proyectos de vida que incluyan los
          viajes de maneras sostenibles y cuidadas…
        </p>
        <p>
          <Button variant="primary">Contactate</Button>
        </p>
      </Jumbotron>
      <div className="mainSection">
          <img src= {fondo} alt="section"/>
        <h3>Hola</h3>
        <p></p>
      </div>
    </div>
  );
}

export default Section;
