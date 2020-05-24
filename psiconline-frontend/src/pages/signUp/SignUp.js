//@ts-check
import React, { useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import "../signUp/signUp.css";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function SignUp() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [sexo, setSexo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [loading, setLoading] = useState(false);
  const [respuestaMensaje, setRespuestaMensaje] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setLoading(true);
      const payload = {
        nombre,
        apellido,
        fechaNacimiento,
        sexo,
        email,
        password,
        newsletter,
      };
      const respuesta = await axios.post(
        "http://localhost:3000/users/",
        payload
      );
      setRespuestaMensaje(respuesta.data.mensaje);
      console.log(respuesta.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }

    clearForm();
  };

  const clearForm = (event) => {
    setNombre("");
    setApellido("");
    setFechaNacimiento("");
    setSexo("");
    setEmail("");
    setPassword("");
    

  };

  return (
    <>
      <NavBar />

      
        <Form className="form" onSubmit={handleSubmit}>
          <h3>Registrate</h3>

          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="form-control"
              id="nombre"
              aria-describedby="ingrese nombre"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              placeholder="Apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              className="form-control"
              id="apellido"
              aria-describedby="ingrese apellido"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>fecha de Nacimiento</Form.Label>
            <Form.Control
              type="date"
              placeholder="fecha de nacimiento"
              value={fechaNacimiento}
              onChange={(e) => setFechaNacimiento(e.target.value)}
              className="form-control"
              id="fechaNacimiento"
              aria-describedby="ingrese fecha de nacimiento"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Sexo</Form.Label>
            <Form.Control
              as="select"
              value={sexo}
              onChange={(e) => setSexo(e.target.value)}
              className="form-control"
              id="sexo"
              aria-describedby="ingrese sexo"
              required
            >
              <option selected>Mujer</option>
              <option>Hombre</option>
              <option>Otro</option>
              <option>No deseo reponder</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="algo@algo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="email"
              aria-describedby="ingrese email"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="ingrese una contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="password"
              aria-describedby="ingrese password"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              name="newsLetter"
              label="Deseo recibir Newsletter"
              checked={newsletter}
              onChange={(e) => setNewsletter(e.target.checked)}
              
            /> 
            
          </Form.Group>

          {loading ? (
            <span>Cargando...</span>
          ) : (
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Registrarme{" "}
            </Button>
          )}
          <p>{respuestaMensaje}</p>
          {respuestaMensaje && <Link to="/">Volver</Link>}
        </Form>
      
    </>
  );
}

export default SignUp;
