import React ,{useState} from "react";
import { Link } from "react-router-dom";
import "./cardbebi.css"

export default function CardBebi({nombre,imagen,precio,id}){

    return(
        <div className="card-bebicontainer">
            <Link to={`/recetas/`+id}> 
            <div className="imageContainer">
            <img src={imagen} alt="Img Not Found"  />
            {/* <div className="imageRating">★${precio}</div> */}
            </div>
            </Link>
            <h4 className="Card-bebiname">
                <strong>{nombre}</strong>
            </h4>
 
        </div>
    )
}
