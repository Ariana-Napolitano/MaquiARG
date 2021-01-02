import React from "react";

const Login = () => {
  return (
    <>
      <div>
        <p className="login">Ingresa a tu cuenta si ya tienes una</p>
        <div className="container_ingreso">
          <div className="row justify-content-center">
            <div className="col-4">
              <form method="post" action="/login">
                <div className=" menu">
                  <div className="form-group">
                    <label htmlFor="exampleDropdownFormEmail1">
                      Nombre de usuario
                    </label>
                    <input
                      type="text"
                      className="form-control nombreUsuario"
                      id="nombre"
                      name="nombre"
                      placeholder="Ariana1234"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleDropdownFormPassword1">
                      Contraseña
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="pass"
                      name="pass"
                      placeholder="*******"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="dropdownCheck"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="dropdownCheck"
                      >
                        Recordarme
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-dark">
                    Ingresar
                  </button>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="/registro">
                    Nuevo? Registrate
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
