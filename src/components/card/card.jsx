import React from "react";
import { Link } from "react-router-dom";
import jetta from "./../../assets/img/img-jetta.jpg"
import civic from "./../../assets/img/img-civic.jpeg"
import audi from "./../../assets/img/img-audi.jpg"
import bmw from "./../../assets/img/img-bmw.jpg"
import cruise from "./../../assets/img/img-cruise.jpg"
import golf from "./../../assets/img/img-golf.jpg"
import ibiza from "./../../assets/img/img-ibiza.jpg"
import mazda from "./../../assets/img/img-mazda3.jpg"
import sentra from "./../../assets/img/img-sentra.jpg"

const Card = () => {
    return(
        <div className="card-container">
            <div className="card" >
                    <img src={jetta} className="card-img-top rounded-top" alt="VW Jetta" />
                    <div className="card-body">
                        <h5 className="card-title">Volkswagen</h5>
                        <p className="card-text">Jetta.</p>
                        <p className="card-text">$350,000.00.</p>
                        <Link to="/Buy"><button className="btn btn-primary bg-info">Comprar</button></Link>
                    </div>
                </div>
        </div>
    );
}

export default Card;