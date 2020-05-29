//@ts-check
import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "../createArticle/createArticle.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";

const EditArticle = (handleEdit) => {
  const { idArticle } = useParams();
  const [imagenPortada, setImagenPortada] = useState("");
  const [titulo, setTitulo] = useState("");
  const [subtitulo, setSubtitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [contenido, setContenido] = useState("");
  const [autor, setAutor] = useState("");
  const [fechaPost, setFechaPost] = useState("");
  const [loading, setLoading] = useState(false);
  const [respuestaMensaje, setRespuestaMensaje] = useState("");

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:3000/blog/${idArticle}`
        );
        const {
          imagen,
          titulo,
          subtitulo,
          categoria,
          contenido,
          autor,
        } = response.data.respuesta;
        console.log(imagen);

        setImagenPortada(imagen);
        setTitulo(titulo);
        setSubtitulo(subtitulo);
        setCategoria(categoria);
        setContenido(contenido);
        setAutor(autor);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
  }, []);

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

      const respuesta = await axios.put(
        `http://localhost:3000/blog/${idArticle}`,
        payload
      );
      setRespuestaMensaje(respuesta.data.mensaje);
      console.log(respuesta.data);

      // onEditArticle({ titulo, categoria, texto });
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

  const clearForm = (event) => {
    setImagenPortada("");
    setTitulo("");
    setSubtitulo("");
    setCategoria("");
    setContenido("");
    setAutor("");
  };

  const imagenUrl =
    imagenPortada &&
    (typeof imagenPortada === "string"
      ? imagenPortada
      : URL.createObjectURL(imagenPortada));
  console.log(imagenUrl);

  return (
    <>
      <NavBar />
      <div className="body-form-article">
        <Form className="form-createArticle" onSubmit={handleSubmit}>
          <h3>Editar Post</h3>
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
              value={categoria}
              required
            >
             
             <option value="viajes">Viajes</option>
              <option value="psicología">Psicología</option>
              <option value="bienestar">Bienestar</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Contenido del Post</Form.Label>
            <Form.Control
              as="textarea"
              autoSave="true"
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
            <Button
              variant="primary"
              type="submit"
              id="submit"
              onClick={handleSubmit}
            >
              Actualizar
            </Button>
          )}
          <p>{respuestaMensaje}</p>
          {respuestaMensaje && <Link to="/blog">Volver</Link>}
        </Form>
      </div>
    </>
  );
};

export default EditArticle;
