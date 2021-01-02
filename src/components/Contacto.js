import React from 'react';

const Contacto = () =>{
    return(
        <>   
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <h2>Contacto</h2> 
                        <form method="post" action="/contacto">
                        <div className="form-group">
                            <input type="text" className="form-control" name="nombre"  placeholder="nombre"/>

                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" name="email"  placeholder="correo"/>    
                        </div>
                        <div className="form-group">
                        <textarea className="form-control"></textarea>
                        </div>
                            <button type="submit" className="btn btn-primary">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Contacto;