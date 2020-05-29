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
      <div className="titulo mt-5">
        <h1>BLOG</h1>
      </div>
     <div className="container">
     
      {loading ? (
        <span>Cargando....</span>
      ) : (
        <ul className="row">
          <div className="card-group w-1000 justify-content-center col-lg-12">
            {articles.map((article) => (
              <li key={article._id}>
                <Card className="card h-600">
                  <Card.Img
                    className="img-fluid"
                    variant="top"
                    src={article.imagen}
                    style={{
                      width: 400,
                      height: 250,
                      cursor: "pointer",
                      objectFit: "cover",
                    }}
                    onClick={() => {
                      linkArticle(article._id);
                    }}
                  />
                  <hr></hr>
                  <small className="text-muted">{article._createdAt}</small>
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
    

     </div>
     <hr></hr>
      <div className="row">
        <div className="container">
          {/* <!-- Social buttons --> */}
          <ul className="list-unstyled list-inline text-center flex-row justify-content-around ">
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
};

export default Blog;
