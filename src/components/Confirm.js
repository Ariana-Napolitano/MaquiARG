import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Confirm = () => {
  let { uuid } = useParams();
  axios.get(`http://localhost:3001/users/confirm/${uuid}`);
  return (
    <>
      <h3>Gracias por registrarte!</h3>
      <h5>Tu usuario ya está habilitado</h5>
    </>
  );
};

export default Confirm;
