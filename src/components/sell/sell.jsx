import React from "react";

const sell = () => {
    return(
        <div className="d-flex justify-content-center">
            <div className="border rounded shadow mb-5 bg-body p-5">
                <h4>Vende tu carro</h4><br />
                <form action="" method="post" className="#">
                    <label htmlFor="">Nombre: </label>
                    <input type="text" name="" id="" placeholder="ingresa tu nombre nombre" className="d-block p-1"/>
                    <label htmlFor="">Correo: </label>
                    <input type="email" name="" id="" placeholder="ingresa tu correo" className="d-block p-1"/>
                    <label htmlFor="" className="d-block p-1">Ingresa los datos de tu carro</label>
                    <label >Marca</label>
                    <input type="text" name="" id="" placeholder="marca del carro" className="d-block p-1"/>
                    <label >Modelo</label>
                    <input type="text" name="" id="" placeholder="modelo del carro" className="d-block p-1"/>
                    <br />
                    <button type="submit" className="bg-primary rounded text-white">vender</button>
                </form>
            </div>
        </div>
    );
}

export default sell;