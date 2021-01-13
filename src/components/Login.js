import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import axios from "axios";

const Login = () => {
  const [usuario, setUsuario] = useState({
    mail: "",
    password: "",
  });

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); //

    setError(false);
    //addUsers(usuario); //addUsers estado ppal (app.js)
    setUsuario({
      mail: "",
      password: "",
    });
    axios
      .post("http://localhost:3001/auth", {
        mail: usuario.mail,
        password: usuario.password,
      })
      .then((user) => {
        /* */
      });
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUsuario({
      ...usuario, // guardo el contenido previo en el setter
      [name]: value, // agregando el contenido nuevo
    });
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <div className="col-6">
          <Form.Group as={Col} controlId="formGridEmail">
            <label htmlFor="mail">Mail</label>
            <input
              type="email"
              placeholder="mail"
              className="form-control"
              id="mail"
              name="mail"
              value={usuario.mail}
              onChange={handleInput}
            />
          </Form.Group>
        </div>
        <div className="col-6">
          <Form.Group as={Col} controlId="formGridPassword">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              placeholder="*****"
              className="form-control"
              id="password"
              name="password"
              value={usuario.password}
              onChange={handleInput}
            />
          </Form.Group>
        </div>

        <Button variant="dark" type="submit">
          Ingresar
        </Button>
      </Form>
    </>
  );
};

export default Login;
