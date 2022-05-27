import React from "react";

const buy = () => {
    return(
        <div className="d-flex justify-content-center">
            <div className="border rounded shadow mb-5 bg-body p-5">
                <h4>Compra un carro</h4><br />
                <form action="" method="post">
                    <label htmlFor="">Nombre: </label>
                    <input type="text" name="" id="" placeholder="nombre" className="d-block p-1"/>
                    <label htmlFor="">Correo: </label>
                    <input type="email" name="" id="" placeholder="correo" className="d-block p-1"/>
                    <label htmlFor="">Elije un carro</label>
                    <input list="opciones" className="d-block p-1"/>
                    <br />
                    <datalist  name="" id="opciones">
                        
                            <option value="1" />
                            <option value="2" />
                            <option value="3" />
                        
                    </datalist>
                    <button type="submit" className="bg-success rounded text-white">comprar</button>
                </form>
            </div>
        </div>
    );
}

export default buy;