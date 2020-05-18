//@ts-check
import React, { useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import { Nav, Card, Button } from "react-bootstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";
import "../blog/blog.css";

function Blog() {
  const { idArticle } = useParams();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [respuestaMensaje, setRespuestaMensaje] = useState("");

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
      const response = await axios.delete(
        `http://localhost:3000/blog/${id}`
      );
      setArticles(response.data.articles);
      setRespuestaMensaje(response.data.mensaje);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <NavBar />

      {loading ? (
        <span>Cargando....</span>
      ) : (
        <ul className="container-fluid">
          {articles.map((article) => (
            <li key={article._id}>
              <Card className="card">
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{article.titulo}</Card.Title>
                  <p>{article.categoria}</p>
                  <Card.Text>{article.texto}</Card.Text>

                  <Link to="/">Leer más....</Link>

                  <span
                    onClick={() => handleEdit(article._id)}
                    style={{ cursor: "pointer" }}
                  >
                    Editar
                  </span>

                  <span
                    onClick={() => handleDelete(article._id)}
                    style={{ cursor: "pointer" }}
                  >
                    Eliminar
                  </span>
                </Card.Body>
              </Card>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Blog;
