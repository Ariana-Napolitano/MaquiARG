import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactNavbar from "./components/ReactNavbar";
import Marcas from "./components/Marcas";
import "./App.css";
import Herramientas from "./components/Herramientas";
import Maquillaje from "./components/Maquillaje";
import SkinCare from "./components/SkinCare";
import Contacto from "./components/Contacto";
import Registro from "./components/Registro";
import Login from "./components/Login";

function App() {
  const [users, setUsers] = useState([]);

  const usuario = { nombre: "fran", apellido: "co", mail: "asd@gmail.com" };

  const addUsers = (usuario = {}) => {
    console.log("Esta función se ejecuta en Registro");
    setUsers([...users, usuario]);
  };

  return (
    <>
      <ReactNavbar />
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/registro">
            <Registro />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/herramientas">
            <Herramientas />
          </Route>
          <Route path="/skincare">
            <SkinCare />
          </Route>
          <Route path="/maquillaje">
            <Maquillaje />
          </Route>
          <Route path="/marcas">
            <Marcas />
          </Route>
          <Route path="/"></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
