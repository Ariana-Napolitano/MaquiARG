import React, { useState, useEffect } from "react";

const SkinCare = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [isFetching, setFetching] = useState(false); //
  // el estado se actualiza con los personajes de la peticin [GET]

  // Componentes funcionales
  /* useEffect(() => {
    // peticion HTTP
    fetch("https://localhost:3000/skincare")
      .then((response) => response.json())
      .then(({ results }) => {
        setFetching(false);
        setItems(results);
        setError(false);
      })
      .catch((e) => setError(true));
  }, []);*/

  return (
    <>
      <h2>Skin Care</h2>
      {items.map((item) => (
        <div className="col-4">
          <div className="card m-2">
            <img className="card-img-top" src={item.image} />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SkinCare;
