//@ts-check
import React, { useEffect, useState } from "react";
import NavBar from "../navBar/NavBar";
import { Nav, Card, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function Blog() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);

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

  return (
    <>
      <NavBar />

      {loading ? (
        <span>Cargando....</span>
      ) : (
        <ul>
          {articles.map((article) => (
            <li key={article._id}>
              <Card style={{ width: "18rem", margin: 20 }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{article.titulo}</Card.Title>
                  <p>{article.categoria}</p>
                  <Card.Text>{article.texto}</Card.Text>
                  <Button variant="primary">
                    <Link to="/">Leer más....</Link>
                  </Button>
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
