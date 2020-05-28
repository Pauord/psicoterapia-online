//@ts-check
import React, { useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import { Nav, Card, Button } from "react-bootstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";
import "../blog/blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import corazonFull from "../../img/corazonRojo.svg";
import corazonEmpty from "../../img/corazonVacio.svg";
import Footer from "../../components/footer/Footer";

const Blog = () => {
  const { idArticle } = useParams();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [respuestaMensaje, setRespuestaMensaje] = useState("");
  let [counter, setCounter] = useState(0);
  const [isClick, setClick] = useState(false);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3000/blog/");
        const articulos = response.data.respuesta.map((articulo) => {
          return {
            ...articulo,
            isLiked: false,
          };
        });
        setArticles(articulos);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
  }, []);

  const linkArticle = (id) => {
    console.log(id);

    history.push(`/blogArticle/${id}`);
  };

  const handleEdit = (id) => {
    history.push(`/edit/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      const response = await axios.delete(`http://localhost:3000/blog/${id}`);
      setArticles(response.data.articles);
      setRespuestaMensaje(response.data.mensaje);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const handleClick = async (id) => {
    try {
      const copiaArticles = articles.map((article) => ({ ...article }));
      const article = copiaArticles.find((article) => article._id === id);
      article.isLiked = !article.isLiked;
      article.counter++;
      setArticles(copiaArticles);
      axios.put(`http://localhost:3000/blog/like/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <NavBar />

      {loading ? (
        <span>Cargando....</span>
      ) : (
        <ul className="container">
          <div className="card-group w-1000 justify-content-center col-lg-12">
            {articles.map((article) => (
              <li key={article._id}>
                <Card className="card ">
                  <Card.Img
                    variant="top"
                    src={article.imagen}
                    style={{ maxWidth: 400, cursor: "pointer" }}
                    onClick={() => {
                      linkArticle(article._id);
                    }}
                  />
                  <hr></hr>
                  <small className="text-muted">Last updated 3 mins ago</small>
                  <Card.Body style={{ textAlign: "justify" }}>
                    <Card.Title
                      onClick={() => {
                        linkArticle(article._id);
                      }}
                    >
                      {article.titulo}
                    </Card.Title>
                    <p>{article.categoria}</p>
                    <div className="container-content mb-5">
                      <Card.Text>{article.contenido}</Card.Text>
                    </div>
                    <Link to="/">Leer más....</Link>
                    <br></br>

                    <hr></hr>
                    <div className="d-flex flex-row justify-content-around">
                      <FontAwesomeIcon
                        icon={faEdit}
                        className="icon-edit"
                        onClick={() => handleEdit(article._id)}
                        style={{
                          cursor: "pointer",
                          margin: 5,
                          color: "grey",
                        }}
                      />

                      <FontAwesomeIcon
                        icon={faTrashAlt}
                        className="icon-edit"
                        onClick={() => handleDelete(article._id)}
                        style={{
                          cursor: "pointer",
                          margin: 5,
                          color: "grey",
                        }}
                      />
                    </div>

                    <div className="row d-flex justify-content-end align-items-center">
                      {article.isLiked ? (
                        <div className="d-flex align-items-center ">
                          <img
                            src={corazonFull}
                            style={{
                              width: 20,
                              marginTop: -13,
                              marginLeft: 20,
                              marginRight: 7,
                            }}
                            onClick={() => handleClick(article._id)}
                          />
                          <p>{article.counter}</p>
                        </div>
                      ) : (
                        <div className="d-flex align-items-center ">
                          <img
                            src={corazonEmpty}
                            style={{
                              width: 20,
                              marginTop: -13,
                              marginLeft: 20,
                              marginRight: 7,
                            }}
                            onClick={() => handleClick(article._id)}
                          />
                          <p>{article.counter}</p>
                        </div>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </li>
            ))}
          </div>
        </ul>
      )}
      <div>
        <ul>
          <li></li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li></li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
