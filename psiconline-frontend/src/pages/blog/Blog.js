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
        setArticles(response.data.respuesta);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
  }, []);

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
      const increaseLike = () => setCounter(counter + 1);
      const decreaseLike = () => setCounter(counter);
      setClick(!isClick);
      {
        isClick ? decreaseLike() : increaseLike();
      }
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
          <div className="card-group w-1000 justify-content-center">
            {articles.map((article) => (
              <li key={article._id}>
                <Card className="card">
                  <Card.Img
                    variant="top"
                    src={article.imagen}
                    style={{ maxWidth: 400 }}
                  />
                  <hr></hr>
                  <Card.Body>
                    <Card.Title>{article.titulo}</Card.Title>
                    <p>{article.categoria}</p>
                    <Card.Text>{article.contenido}...</Card.Text>

                    <Link to="/">Leer más....</Link>
                    <br></br>
                    <FontAwesomeIcon
                      icon={faEdit}
                      className="icon-edit"
                      onClick={() => handleEdit(article._id)}
                      style={{ cursor: "pointer", margin: 5, color: "grey" }}
                    />

                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      className="icon-edit"
                      onClick={() => handleDelete(article._id)}
                      style={{ cursor: "pointer", margin: 5, color: "grey" }}
                    />

                    {isClick ? (
                      <div>
                        <img
                          src={corazonFull}
                          style={{ width: 20, marginTop: -7, marginLeft: 20 }}
                          onClick={() => handleClick(article._id)}
                        />
                        <p>{counter}</p>
                      </div>
                    ) : (
                      <div>
                        <img
                          src={corazonEmpty}
                          style={{ width: 20, marginTop: -7, marginLeft: 20 }}
                          onClick={() => handleClick(article._id)}
                        />
                        <p>{counter}</p>
                      </div>
                    )}
                  </Card.Body>
                </Card>
              </li>
            ))}
          </div>
        </ul>
      )}
    </>
  );
};

export default Blog;
