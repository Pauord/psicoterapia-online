//@ts-check
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./createArticle.css";
import axios from "axios";
import { Link } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";

const CreateArticle = (nochangeEditor) => {
  const [imagenPortada, setImagenPortada] = useState("");
  const [titulo, setTitulo] = useState("");
  const [subtitulo, setSubtitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [contenido, setContenido] = useState("");
  const [autor, setAutor] = useState("");
  const [fechaPost, setFechaPost] = useState("");
  const [loading, setLoading] = useState(false);
  const [respuestaMensaje, setRespuestaMensaje] = useState("");
  console.log(categoria);

  // ClassicEditor
  // .create( document.querySelector( '#editor' ) )
  // .catch( error => {
  //     console.error( error );
  // } );

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setLoading(true);
      const payload = new FormData();
      payload.append("imagen", imagenPortada);
      payload.append("titulo", titulo);
      payload.append("subtitulo", subtitulo);
      payload.append("categoria", categoria);
      payload.append("contenido", contenido);
      payload.append("autor", autor);

      const respuesta = await axios.post(
        "http://localhost:3000/blog/",
        payload
      );
      setRespuestaMensaje(respuesta.data.mensaje);
      console.log(respuesta.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }

    clearForm();
  };

  const handlePicture = (e) => {
    setImagenPortada(e.target.files[0]);
  };

  // const handleCKEditor = async (e, editor) => {
  //   const data = editor.getData()
  //   setContenido(data)
  //   console.log({ data });
  // };

  const clearForm = (event) => {
    setTitulo("");
    setCategoria("");
    setContenido("");
  };

  const imagenUrl = imagenPortada && URL.createObjectURL(imagenPortada);
  return (
    <>
      <div>
        <NavBar />
      </div>

      <div className="body-form-article">
        <Form className="form-createArticle" onSubmit={handleSubmit}>
          <h3>Nuevo Post</h3>
          <div className="container-image">
            <Form.Label>Imagen de Portada</Form.Label>
            {imagenPortada && <img src={imagenUrl} style={{ width: 200 }} />}
            <input
              type="file"
              onChange={handlePicture}
              className="form-control"
              id="image"
              required
              style={{ border: "none" }}
            />
          </div>
          <Form.Group>
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              className="form-control"
              id="title"
              aria-describedby="ingrese titulo articulo"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Subtitulo</Form.Label>
            <Form.Control
              type="text"
              value={subtitulo}
              onChange={(e) => setSubtitulo(e.target.value)}
              className="form-control"
              id="subtitle"
              aria-describedby="ingrese subtitulo articulo"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Categoría</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => setCategoria(e.target.value)}
              className="form-control"
              id="categoria"
              aria-describedby="ingrese categoria"
              required
              value={categoria}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Contenido del Post</Form.Label>
            <Form.Control
              as="textarea"
              autoSave="true"
              placeholder="Escribe tu post aquí"
              value={contenido}
              onChange={(e) => setContenido(e.target.value)}
              className="form-control"
              id="title"
              aria-describedby="ingrese contenido del post"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Autor</Form.Label>
            <Form.Control
              type="text"
              value={autor}
              onChange={(e) => setAutor(e.target.value)}
              className="form-control"
              id="author"
              aria-describedby="ingrese autor articulo"
              required
            />
          </Form.Group>
          {loading ? (
            <span>Cargando...</span>
          ) : (
            <>
              <Button
                variant="primary"
                type="submit"
                id="submit"
                onClick={handleSubmit}
              >
                Postear
              </Button>
              <Link to="/blog">Cancelar</Link>
            </>
          )}
          <p>{respuestaMensaje}</p>
          {respuestaMensaje && <Link to="/blog">Volver</Link>}
        </Form>
      </div>
    </>
  );
};

export default CreateArticle;
