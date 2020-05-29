//@ts-check
import React from "react";
import "../section/section.css";
import icono1 from "../../img/psicologia.svg";
import icono2 from "../../img/seminario-web.svg";
import icono3 from "../../img/agencia-de-viajes.svg";
import { Link } from "react-router-dom";
import Testimonials from "../testimonials/Testimonials";
import { Form, Button } from "react-bootstrap";

function Section(props) {
  return (
    <div>
      <section className="d-flex justify-content-center container-fluid pl-0 pr-0">
        <div className="iconos-nosotros m-5 d-flex justify-content-between h-700 row">
          
          <div className="icono col-lg-4 col-md-12 col-sm-12">
            <img src={icono1} alt="icono psicologia" />
            <h3>Psicoterapia online</h3>
            <p>
            Sesiones online individuales que se adaptan a las vidas en movimiento (antes, durante y después del viaje).
            </p>
          </div>
          

           <div className="icono col-lg-4 col-md-12 col-sm-12">
            <img src={icono2} alt="Icono webinars" />
            <h3>Webinars</h3>
            <p>
              Son espacios informativos que se realizan una vez al mes, las temáticas son muy diversas!. Libres y gratuitos.
            </p>
          </div>

          <div className="icono col-lg-4 col-md-12 col-sm-12">
            <img src={icono3} alt="Icono psicoviajeros" />
            <h3>¿Sos psico-viajero/a?</h3>
            <p>
            Sumate a los talleres! son espacios grupales de exploración (online y presenciales) vinculados a temas específicos de la vida viajera.
            </p>
          </div>
        </div>
      </section>
      <div className="d-flex justify-content-center">
        <button className="btn btn-info mb-5 btn-sandy" >Más info...</button>
      </div>

      <section className="imagen-blog">
        <div className="contenido">
          <div className="row">
            <div className="col centro-blog d-flex justify-content-center alingn-center flex-column pl-7">
              <h2>Un Blog imperfecto</h2>
              <p>
                Aqui encontrarás una melange de ideas, info útil, preguntas,
                respuestas (no tantas) y todo lo que pude ir plasmando en estos
                años de viajes y aventuras.
              </p>
              <Link to="/blog" className="btn btn-info btn-sandy" >
                Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 50,
          padding: 20,
        }}
      >
        <Form
        id="formulario-contacto"
          className="formulario-contacto"
          style={{
            width: 700,
            height: 600,
            backgroundColor: "darkcyan",
            padding: 20,
          }}
        >
          <Form.Group controlId="exampleForm.ControlInput1">
            <h4>CONTACTO</h4>
            <Form.Label style={{ fontSize: "1.7rem" }}>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="nombre"
              style={{ fontSize: "1.7rem" }}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label style={{ fontSize: "1.7rem" }}>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              style={{ fontSize: "1.7rem" }}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control as="textarea" rows="10" />
          </Form.Group>
          <Button variant="light" type="submit">
            Enviar
          </Button>
        </Form>
      </div>

     
    </div>
  );
}

export default Section;
