import React from "react";
import { Card } from './..';

const Cards = () => {
    return(
        <div className="card d-flex justify-content-evenly">
            <div className="card-body row row-cols-1 row-cols-md-4 g-5" >
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}
export default Cards;