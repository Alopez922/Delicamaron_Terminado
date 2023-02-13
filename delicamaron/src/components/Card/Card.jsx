import React ,{useState} from "react";
import { Link } from "react-router-dom";
import "./card.css"

export default function Card({nombre,imagen,descripcion,precio,id}){

    return(
        <div className="card-container">
            <Link to={`/recetas/`+id}> 
            <div className="imageContainer">
            <img src={imagen} alt="Img Not Found"  />
            <div className="imageRating">★${precio}</div>
            </div>
            </Link>
            <h4 className="Card-name">
                <strong>{nombre}</strong>
                </h4>
              <div className="card-descripcion">
              <p>{descripcion}</p> 
              </div>
          
           
        </div>
    )
}



