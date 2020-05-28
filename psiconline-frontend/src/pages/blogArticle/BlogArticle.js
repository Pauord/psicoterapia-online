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
        } = response.data.respuesta;

        setImagenPortada(imagen);
        setTitulo(titulo);
        setSubtitulo(subtitulo);
        setCategoria(categoria);
        setContenido(contenido);
        setAutor(autor);
      } catch (error) {
        console.log(error);
      }
    };
    fetchArticle();
  }, []);

  return (
    <>
      <NavBar />
      <div className="container-article">
        <div className="titulo">
          <h1>BLOG</h1>
        </div>
        <div className="col">
          <div className="row d-flex justify-content-center">
            <div className="col body-article">
              <h3>{titulo}</h3>
              <label>{subtitulo}</label>
              <div className="row">
                <small className="m-4">{autor}</small>
              </div>

              {/* <img src={imagenPortada} /> */}
              <img src={imagenPortada} style={{ width: 500, margin: 0 }} />
              <br></br>
              <div className="text-article">
                <p>{contenido}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="comments">
          <h4>Comentarios</h4>
          <input type="textarea" placeholder="Escribe tu comentariio aqui" />

          <div className="row">
            <div className="suscribe"></div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default BlogArticle;
