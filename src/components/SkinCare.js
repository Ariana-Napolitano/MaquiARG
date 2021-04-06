import React, { useState, useEffect } from "react";

const SkinCare = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [isFetching, setFetching] = useState(false); //
  // el estado se actualiza con los personajes de la peticin [GET]

  // Componentes funcionales
  useEffect(() => {
    // peticion HTTP
    fetch("http://localhost:3001/productos?categorias=skincare")
      .then((res) => {
        if (res.status == 200) {
          return res.json();
        } else {
          throw "error";
        }
      })
      .then((maquillajes) => {
        setFetching(false);
        maquillajes.forEach((element) => {
          setItems((items) => [...items, element]);
        });
        setError(false);
      })
      .catch((e) => {
        setError(true);
      });
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

  return (
    <>
      <h2>Skin Care</h2>
      {items.map((item) => (
        <div className="col-4">
          <div id="producto" className="card m-2">
            <img className="card-img-top" src={item.imagen} />
            <div className="card-body">
              <h5 className="card-title">{item.nombre}</h5>
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

export default SkinCare;
