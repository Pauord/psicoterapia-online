//@ts-check
import React from "react";
import { Parallax, Background } from "react-parallax";
import portada from "../../img/cover5.jpg";
import { Link } from "react-router-dom";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  marginTop: "50",
  
};
const insideStyles = {
  background: "none",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  color: "white",
};

const ParallaxComponent = () => (
  <div style={styles}>
    <Parallax bgImage={portada} strength={400}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>
          <p>Texto aquí</p>
          <button
            type="button"
            style={{ fontSize: "2rem", width: 153}}
            className="btn btn-outline-light"
          ><a href="#formulario-contacto"></a>
            Contactate
          </button>
        </div>
      </div>
    </Parallax>
  </div>
);

export default ParallaxComponent;
