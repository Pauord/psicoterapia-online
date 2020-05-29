//@ts-check
import React, { useState, useEffect } from "react";
import "../blogArticle/blogArticle.css";
import { Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import { Link, useParams, useHistory } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";

function BlogArticle() {
  const { id } = useParams();
  const history = useHistory();
  const [imagenPortada, setImagenPortada] = useState("");
  const [titulo, setTitulo] = useState("");
  const [subtitulo, setSubtitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [contenido, setContenido] = useState("");
  const [autor, setAutor] = useState("");
  const [fechaPost, setFechaPost] = useState("");
  const [comentarios, setComentarios] = useState([]);
  const [comentario, setComentario] = useState("");
  let [counter, setCounter] = useState(0);
  const [isClick, setClick] = useState(false);

  useEffect(() => {
    const fetchArticle = async (e) => {
      try {
        const response = await axios.get(`http://localhost:3000/blog/${id}`);
        const {
          imagen,
          titulo,
          subtitulo,
          categoria,
          contenido,
          autor,
          comentario,
        } = response.data.respuesta;

        setImagenPortada(imagen);
        setTitulo(titulo);
        setSubtitulo(subtitulo);
        setCategoria(categoria);
        setContenido(contenido);
        setAutor(autor);
        setComentarios(comentario);
      } catch (error) {
        console.log(error);
      }
    };
    fetchArticle();
  }, []);

  const handleSubmit = async () => {
    try {
      const payload = new FormData();
      payload.append("comentario", comentario);

      const respuesta = await axios.post(
        "http://localhost:3000/blog/",
        payload
      );

      console.log(respuesta.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="container-article">
        <div className="titulo mt-5">
          <h1>BLOG</h1>
        </div>
        <div className="col">
          <div className="row d-flex justify-content-center text-center">
            <div className="col body-article text-center">
              <h3 className="mb-3">{titulo}</h3>
              <p className="lead">{subtitulo}</p>
              <div className="row">
                <small className="m-4 text-muted">Autor/a: {autor}</small>
              </div>

              {/* <img src={imagenPortada} /> */}
              <img src={imagenPortada} style={{ width: 500, margin: 0 }} />
              <br></br>
              <div className="text-article text-justify">
                <p>{contenido}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="row">
        <div className="comments"> */}
      {/* <div>
            {comentarios.map((comentario) => (
              <li key={comentario._id}>
                <label>{comentario.nombreComentario}</label>
                <p>{comentario.comentario}</p>
              </li>
            ))}
          </div> */}
      {/* <Form>
            <Form.Group>
              <Form.Label>Comentarios</Form.Label>
              <Form.Control
                as="textarea"
                autoSave="true"
                placeholder="Escribe tu comentario"
                onChange={(e) => setComentarios(e.target.value)}
                className="form-control"
                id="title"
                aria-describedby="ingrese contenido del post"
                required
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              id="submit"
              onClick={handleSubmit}
            >
              Postear
            </Button>
            <Link to="/blogArticle/:id">Cancelar</Link>
          </Form> */}

      {/* </div>
      </div> */}
      <hr></hr>
      <div className="row">
        <div className="container">
          {/* <!-- Social buttons --> */}
          <ul className="list-unstyled list-inline text-center flex-row justify-content-around">
            <li className="list-inline-item">
              <a
                href="https://facebook.com"
                className="btn-floating btn-fb mx-1"
              >
                <i className="fab fa-facebook-f" style={{ color:"sandybrown"}}> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://twitter.com"
                className="btn-floating btn-tw mx-1"
              >
                <i className="fab fa-twitter" style={{ color:"sandybrown"}}> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://google.com"
                className="btn-floating btn-gplus mx-1"
              >
                <i className="fab fa-google-plus-g" style={{ color:"sandybrown"}}> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://likedin.com"
                className="btn-floating btn-li mx-1"
              >
                <i className="fab fa-linkedin-in" style={{ color:"sandybrown"}}> </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr></hr>

      <Footer />
    </>
  );
}

export default BlogArticle;
