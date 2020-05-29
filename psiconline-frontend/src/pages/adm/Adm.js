//@ts-check
import React, { useState, useEffect } from "react";
import "./adm.css";
import NavBar from "../../components/navBar/NavBar";
import { Link, useParams } from "react-router-dom";
import { Button, Table, Nav } from "react-bootstrap";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Adm = () => {
  const { id } = useParams;
  const [isClicked, setIsClicked] = useState(false);
  const [users, setUsers] = useState([]);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [isInEditMode, setIsInEditMode] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users/");
        setUsers(response.data.users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleEdit = async () => {
    const response = await axios.get(`http://localhost:3000/users/${id}`);
    const { nombre, apellido, email } = response.data.user;
    const payload = {
      nombre,
      apellido,
      email,
    };
    try {
      const respuesta = await axios.put(
        `http://localhost:3000/users/${id}`,
        payload
      );
      setNombre(nombre);
      setApellido(apellido);
      setEmail(email);

      setIsInEditMode(false);
      console.log(respuesta.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const respuesta = await axios.delete(`http://localhost:3000/users/${id}`);
      setUsers(respuesta.data.users);
      console.log(respuesta.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleIsInEditMode = () => {
    setIsInEditMode(true);
  };

  return (
    <div className="body-adm">
      <NavBar />
     
      <Link to="/createArticle" className="link btn btn-outline-info">
         Nuevo Post{" "}
        </Link>
      

      {isClicked ? (
        isInEditMode ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>apellido</th>
                <th>Email</th>
              </tr>
            </thead>

            {users.map((user) => (
              <tbody>
                <tr>
                  <td>
                    <input
                      value={user.nombre}
                      onChange={(e) => setNombre(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      value={user.apellido}
                      onChange={(e) => setApellido(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      value={user.email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <button className="btn btn-info" onClick={handleEdit}>
                    Actualizar
                  </button>
                </tr>
              </tbody>
            ))}
          </Table>
        ) : (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>apellido</th>
                <th>Email</th>
              </tr>
            </thead>

            {users.map((user) => (
              <tbody>
                <tr>
                  <td>{user.nombre}</td>
                  <td>{user.apellido}</td>
                  <td>{user.email}</td>
                  <td>
                    {" "}
                    <FontAwesomeIcon
                      icon={faEdit}
                      className="icon-edit"
                      onClick={handleIsInEditMode}
                      style={{ cursor: "pointer", margin: 5, color: "grey" }}
                    />
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      className="icon-edit"
                      onClick={() => handleDelete(user._id)}
                      style={{ cursor: "pointer", margin: 5, color: "grey" }}
                    />
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        )
      ) : (
        <Button  onClick={() => handleClick()}>Usuarios registrados</Button>
      )}
    </div>
  );
};

export default Adm;

//https://www.youtube.com/watch?v=WTh54FMNrbU
