//@ts-check
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../createArticle/createArticle.css";
import axios from "axios";
import { Link } from "react-router-dom";
import NavBar from "../navBar/NavBar";

const CreateArticle = () => {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [texto, setTexto] = useState("");
  const [loading, setLoading] = useState(false);
  const [respuestaMensaje, setRespuestaMensaje] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setLoading(true);
      const payload = {
        titulo,
        categoria,
        texto,
      };
      const respuesta = await axios.post(
        "http://localhost:3000/blog/",
        payload
      );
      setRespuestaMensaje(respuesta.data.mensaje);
      console.log(respuesta.data);

      // onCreateArticle({ titulo, categoria, texto });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }

    clearForm();
  };

  const clearForm = (event) => {
    setTitulo("");
    setCategoria("");
    // setFecha("");
    setTexto("");
  };

  return (
    <>
      <NavBar />
      <div className="body-form-article">
        <Form className="form" onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Titulo del artículo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              className="form-control"
              id="title"
              aria-describedby="ingrese titulo articulo"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Categoría</Form.Label>
            <Form.Control
              as="select"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              className="form-control"
              id="categoria"
              aria-describedby="ingrese categoria"
              required
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Contenido del articulo</Form.Label>
            <Form.Control
              type="textarea"
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              className="form-control"
              id="texto"
              aria-describedby="ingrese texto"
              required
            />
          </Form.Group>
          {loading ? (
            <span>Cargando...</span>
          ) : (
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Publicar artículo
            </Button>
          )}
          <p>{respuestaMensaje}</p>
          {respuestaMensaje && <Link to="/blog">Volver</Link>}
        </Form>
      </div>
    </>
  );
};

export default CreateArticle;
