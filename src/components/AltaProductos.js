import React, { useState } from "react";
import { Form, Col, Button, InputGroup, FormControl } from "react-bootstrap";
import axios from "axios";

const AltaProductos = () => {
  const [producto, setProducto] = useState({
    nombre: "",
    precio: "",
    descripcion: "",
    marca: "",
    imagen: "",
    categoria: "",
  });

  const [colores, setColores] = useState([]);

  const [color, setColor] = useState({
    cnombre: "",
    stock: 0,
  });

  const [error, setError] = useState(false);

  const categorias = ["Maquillaje", "SkinCare", "Herramientas"];

  const handleSubmit = (e) => {
    e.preventDefault(); //

    setError(false);

    setProducto({
      nombre: "",
      precio: "",
      descripcion: "",
      marca: "",
      imagen: "",
      categoria: "",
    });

    setColores([]);

    setColor({
      cnombre: "",
      stock: 0,
    });

    axios
      .post("http://localhost:3001/productos", {
        nombre: producto.nombre,
        precio: producto.precio,
        descripcion: producto.descripcion,
        marca: producto.marca,
        categoria: producto.categoria,
        imagen: producto.imagen,
        colores: colores,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((e) => {
        setError(true);
        console.log(e);
      });
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setColor({
      ...color,
      [name]: value,
    });
    setProducto({
      ...producto,
      [name]: value,
    });
  };

  const handleDelete = (i) => {
    setColores(colores.filter((_, index) => index !== i));
  };

  const handleAddition = () => {
    setColores([
      ...colores, color
    ]
    )
    setColor({
      cnombre:'',
      stock:0
    })
  };

  return (
    <>
      <div className="container" style={{ marginTop: "18vh" }}>
        <div className="row justify-content-center">
          <div className="col-12">
            <h4>Alta de productos</h4>
          </div>
          <Form onSubmit={handleSubmit}>
            <div className="col-12">
              <Form.Group as={Col} controlId="formGridNombre">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  className="form-control"
                  value={producto.nombre}
                  onChange={handleInput}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPrecio">
                <label htmlFor="precio">Precio</label>
                <input
                  type="text"
                  name="precio"
                  id="precio"
                  className="form-control"
                  value={producto.precio}
                  onChange={handleInput}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridDescripcion">
                <label htmlFor="descripcion">Descripcion</label>
                <textarea
                  className="form-control"
                  id="descripcion"
                  name="descripcion"
                  value={producto.descripcion}
                  onChange={handleInput}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridColor">
                <label htmlFor="colores">Colores</label>
                {colores.map((color, i) => (
                  <InputGroup className="mb-2 mr-ms-2">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Nombre y Stock</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                    
                    value={color.cnombre}
                    
                  />
                  <FormControl
                    
                    value={color.stock}
                   
                  />
                    <InputGroup.Append>
                      <Button
                        variant="outline-secondary"
                        onClick={() => handleDelete(i)}
                      >
                        -
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                ))}
                <InputGroup className="mb-2 mr-ms-2">
                  <InputGroup.Prepend>
                    <InputGroup.Text>Nombre y Stock</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    name="cnombre"
                    value={color.cnombre}
                    onChange={handleInput}
                  />
                  <FormControl
                    name="stock"
                    value={color.stock}
                    onChange={handleInput}
                  />
                  <InputGroup.Append>
                    <Button
                      variant="outline-secondary"
                      onClick={handleAddition}
                    >
                      +
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
                
              </Form.Group>
              <Form.Group as={Col} controlId="formGridMarca">
                <label htmlFor="marca">Marca</label>
                <input
                  type="text"
                  name="marca"
                  id="marca"
                  className="form-control"
                  value={producto.marca}
                  onChange={handleInput}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCategoria">
                <Form.Label>Categoria</Form.Label>
                <Form.Control
                  as="select"
                  name="categoria"
                  value={producto.categoria}
                  onChange={handleInput}
                >
                  <option value="" disabled selected>
                    Elige Categoria
                  </option>
                  {categorias.map((categoria) => (
                    <option value={categoria}>{categoria}</option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridImagen">
                <input
                  type="file"
                  className="form-control"
                  name="imagen"
                  onChange={handleInput}
                />
                <img src={producto.imagen} />
              </Form.Group>
              <Button variant="dark" type="submit">
                Guardar
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default AltaProductos;
