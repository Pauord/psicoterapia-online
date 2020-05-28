//@ts-check
import React from "react";
import "../section/section.css";
import icono1 from "../../img/psicologia.svg";
import icono2 from "../../img/seminario-web.svg";
import icono3 from "../../img/agencia-de-viajes.svg";
import { Link } from "react-router-dom";

function Section(props) {
  return (
    <div>
      <section className="d-flex justify-content-center ">
      

        <div className="iconos-nosotros m-5 d-flex justify-content-between">
          <div className="icono">
            <img src={icono1} alt="icono psicologia" />
            <h3>Psicoterapia online</h3>
            <p>
              Quasi quibusdam, quos deserunt, recusandae iusto dolorem
              voluptatibus quaerat veritatis consectetur culpa sit dignissimos
              maiores iure id, magnam non voluptatum molestiae doloremque.
            </p>
          </div>

          <div className="icono">
            <img src={icono2} alt="Icono webinars" />
            <h3>Webinars</h3>
            <p>
              Quasi quibusdam, quos deserunt, recusandae iusto dolorem
              voluptatibus quaerat veritatis consectetur culpa sit dignissimos
              maiores iure id, magnam non voluptatum molestiae doloremque.
            </p>
          </div>

          <div className="icono">
            <img src={icono3} alt="Icono psicoviajeros" />
            <h3>¿Sos psico-viajero/a?</h3>
            <p>
              Quasi quibusdam, quos deserunt, recusandae iusto dolorem
              voluptatibus quaerat veritatis consectetur culpa sit dignissimos
              maiores iure id, magnam non voluptatum molestiae doloremque.
            </p>
          </div>
          <Link to="/blog" className="btn btn-outline-info ">
               Más info...
              </Link>
        </div>
    
      </section>

      <section className="imagen-blog">
        <div className="contenedor contenido">
          <div className="row">
            
            <div className="col centro-blog d-flex justify-content-center alingn-center flex-column">
              <h2>Un Blog imperfecto</h2>
              <p>
                Aqui encontrarás una melange de ideas, info útil, preguntas,
                respuestas (no tantas) y todo lo que pude ir plasmando en estos
                años de viajes y aventuras.
              </p>
              <Link to="/blog" className="btn btn-info">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section;
