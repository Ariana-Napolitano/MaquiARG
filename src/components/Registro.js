import React, { useState } from "react";
import Error from "./Error";
import { Form, Col, Button } from "react-bootstrap";

const Registro = ({ addUsers }) => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
    mail: "",
    password: "",
    direccionEnvio: {
      direccion: "",
      ciudad: "",
      provincia: "",
      cp: "",
    },
  }); // return [getter, setter]

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); //

    setError(false);
    addUsers(usuario); //addUsers estado ppal (app.js)
    setUsuario({
      nombre: "",
      apellido: "",
      mail: "",
      password: "",
      direccionEnvio: {
        direccion: "",
        ciudad: "",
        provincia: "",
        cp: "",
      },
    });
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUsuario({
      ...usuario, // guardo el contenido previo en el setter
      [name]: value, // agregando el contenido nuevo
    });
    /*
    setUsuario({
      ...usuario, // guardo el contenido previo en el setter
      [e.target.name]: e.target.value, // agregando el contenido nuevo
    });
    
    */
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Row>
          <div className="col-6">
            <Form.Group as={Col} controlId="formGridNombre">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                placeholder="Nombre"
                className="form-control"
                id="nombre"
                name="nombre"
                value={usuario.nombre}
                onChange={handleInput}
              />
            </Form.Group>
          </div>
          <div className="col-6">
            <Form.Group as={Col} controlId="formGridApellido">
              <label htmlFor="apellido">Apellido</label>
              <input
                type="text"
                placeholder="Apellido"
                className="form-control"
                id="apellido"
                name="apellido"
                value={usuario.apellido}
                onChange={handleInput}
              />
            </Form.Group>
          </div>
        </Form.Row>
        <Form.Row>
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
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <div className="col-12">
            <label htmlFor="direccion">Dirección de envío</label>
            <input
              type="text"
              placeholder="direccion"
              className="form-control"
              id="direccion"
              name="direccion"
              value={usuario.direccion}
              onChange={handleInput}
            />
          </div>
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <label htmlFor="ciudad">Ciudad</label>
            <input
              type="text"
              placeholder="Ciudad"
              className="form-control"
              id="ciudad"
              name="ciudad"
              value={usuario.ciudad}
              onChange={handleInput}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Provincia</Form.Label>
            <Form.Control
              as="select"
              name="provincia"
              value={usuario.provincia}
              onChange={handleInput}
            >
              <option value="" disabled selected>
                Elige Provincia
              </option>
              <option value="Buenos Aires">Buenos Aires</option>
              <option value="Cordoba">Córdoba</option>
              <option value="Chubut">Chubut</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <label htmlFor="cp">Código Postal</label>
            <input
              type="text"
              placeholder="Código Postal"
              className="form-control"
              id="cp"
              name="cp"
              value={usuario.cp}
              onChange={handleInput}
            />
          </Form.Group>
        </Form.Row>

        <Button variant="dark" type="submit">
          Registrar
        </Button>
      </Form>
      {error ? <Error message="Completa los datos del formulario" /> : null}
    </>
  );
};

export default Registro;
