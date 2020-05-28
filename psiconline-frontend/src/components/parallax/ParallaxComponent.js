import React from 'react';
import { Parallax, Background } from 'react-parallax';
import portada from "../../img/portada2.jpg";


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
  color: "white"
};


  const ParallaxComponent = () => (
  <div style={styles}>
    <Parallax bgImage={portada} strength={400}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>
         <p>Texto aquí</p>
         <button type="button" className="btn btn-outline-light">
            Contactate
          </button>
        </div>
      </div>
    </Parallax>
  
  </div>
);

export default ParallaxComponent;
