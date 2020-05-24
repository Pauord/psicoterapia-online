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
  const { idUser } = useParams();
  const [isClicked, setIsClicked] = useState(false);
  const [users, setUsers] = useState([]);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [isInEditMode, setIsInEditMode] = useState(false);
  const [value, setValue] = useState("");

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


  // const handleEdit = async (id) => {
  //   const response = await axios.get(`http://localhost:3000/users/${idUser}`);
  //   const {nombre, apellido, email} = response.data.user;
  //   const payload = {
  //     nombre,
  //     apellido,
  //     email,
  //   };
  //  try {
  //     const respuesta = await axios.put(
  //       `http://localhost:3000/users/${id}`,
  //       payload
  //     );
  //     setNombre(nombre);
  //     setApellido(apellido);
  //     setEmail(email);
  //     console.log(respuesta.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const handleDelete = async (id) => {
    try {
      const respuesta = await axios.delete(`http://localhost:3000/users/${id}`);
      setUsers(respuesta.data.users);
      console.log(respuesta.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <NavBar />
      <Nav.Link>
        <Link to="/createArticle" className="link">
          Crear Articulo{" "}
        </Link>
      </Nav.Link>

      {isClicked ? (
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
                  // onClick={()=> handleEdit(user._id)}
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
      ) : (
        <Button onClick={() => handleClick()}>Administrar usuarios</Button>
      )}
    </div>
  );
};

export default Adm;

//https://www.youtube.com/watch?v=WTh54FMNrbU
