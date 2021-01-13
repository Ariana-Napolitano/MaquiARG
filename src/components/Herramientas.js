import React, { useState, useEffect } from "react";
import axios from "axios";

const Herramientas = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [isFetching, setFetching] = useState(false); //
  // el estado se actualiza con los personajes de la peticin [GET]

  // Componentes funcionales
  useEffect(() => {
    // peticion HTTP
    fetch("https://localhost:3000/herramientas")
      .then((response) => response.json())
      .then(({ results }) => {
        setFetching(false);
        setItems(results);
        setError(false);
      })
      .catch((e) => setError(true));
  }, []);

  async function addToCart(id, cantidad) {
    try {
      const response = await fetch("http://localhost:3000/carrito", {
        method: "POST",
        body: JSON.stringify({
          productId: id,
          cantidad: cantidad,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      let data = await response.json();
      alert("Producto añadido al carrito");
      console.log(data);
    } catch (err) {
      alert("Algo salió mal");
      console.log(err);
    }
  }
  axios
    .get("http://localhost:3001/productos?categoria=herramientas", {
      responseType: "json",
    })
    .then(function (res) {
      if (res.status === 200) {
        console.log(res.data);
        document.getElementById("producto").innerHTML = res.data.title;
      }
      console.log(res);
    })
    .catch(function (err) {
      console.log(err);
    });

  return (
    <>
      <h2>Herramientas</h2>
      {items.map((item) => (
        <div className="col-4">
          <div id="producto" className="card m-2">
            <img className="card-img-top" src={item.image} />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <h3>{item.precio}</h3>
              <button
                onClick={(e) => addToCart(item._id, 1)}
                className="btn btn-md btn-info"
              >
                Añadir al carrito
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Herramientas;
