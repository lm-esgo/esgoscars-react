import React from "react";

const register = () => {
    return(
        <div className="d-flex justify-content-center">
            <div className="border rounded shadow p-3 mb-5 bg-body p-5">
                <h3>REGISTRO</h3>
                <form action="http://192.168.0.105:888/API-esgoscars/registro.php" method="POST">
                    <label>Nombre</label>
                    <input type="text" name="nombre" placeholder="nombre" className="d-block p-1"/><br />
                    <label>Correo</label>
                    <input type="email" name="correo" placeholder="correo" className="d-block p-1"/>
                    <label htmlFor="">Contraseña</label>
                    <input type="password" name="pass1" className="d-block p-1"/>
                    <label htmlFor="">Confirma contraseña</label>
                    <input type="password" name="pass2"  className="d-block p-1"/>
                    <br />
                    <button type="submit" className="btn btn-outline-info text-primary" name="register_btn">Registrame</button>
                </form>
            </div>
        </div>
    );
}

export default register;