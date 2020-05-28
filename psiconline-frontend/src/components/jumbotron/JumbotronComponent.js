//@ts-check
import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

import "./jumbotron.css";

function JumbotronComponent() {
  return (
    <div>
      <Jumbotron
        className="jumbotron"
        style={{ marginBottom: 0, color: "rgb(82, 80, 80)" }}
      >
        <h1>Bienvenida/o!</h1>
        <p className="">
          Quiero darte la bienvenida y contarte que me pone muy contenta que
          estés aquí. Mi apuesta es crear un espacio seguro, cómodo y accesible
          para Viajeras, Viajeros, aspirantes y retornados. Un espacio donde
          podamos encontrarnos y trabajar para crear proyectos de vida que
          incluyan los viajes de maneras sostenibles y cuidadas…
        </p>
      
      </Jumbotron>
    </div>
  );
}

export default JumbotronComponent;
