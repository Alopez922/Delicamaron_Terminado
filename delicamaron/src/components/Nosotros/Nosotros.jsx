import React from "react";
import Footer from "../Footer/Footer";
import Navreact from "../Navbar/Navbar";
import videodeli1 from "../../utils/imagenes/videodeli1.mp4"
import foto5 from "../../utils/imagenes/foto5.jpg"
import pelicula from "../../utils/imagenes/pelicula.jpg"

import "./nosotros.css"



export default function Nosotros() {
  return (
    <div className="Nosotros-Container">
      <Navreact />
      <div className="pelicula">
        <img width= "100%"  src={pelicula} alt="" />
      </div>
      <div className="mission-section">
        <h2 className="mission-title">Misión</h2>
        <div className="mission-content">
          <div className="mission-video">
            <video width="100%" height="300px" src={videodeli1} controls loop />
          </div>
          <div className="mission-description">
            <p>
              En Delicamaron, nuestra misión es ofrecer una experiencia culinaria única y memorable a cada uno de nuestros clientes. Queremos ser reconocidos como el restaurante más innovador e inolvidable de la ciudad, donde la calidad de la comida y el servicio al cliente son nuestras máximas prioridades. Nos esforzamos por crear un ambiente acogedor y una atmósfera relajada, donde la gente pueda disfrutar de la comida y el tiempo con sus seres queridos. Juntos, trabajamos hacia el objetivo de ser la primera elección de los clientes para cualquier ocasión especial o una noche cualquiera.
            </p>
          </div>
        </div>
      </div>

      <div className="vision-section">
        <h2 className="vision-title">Visión</h2>
        <div className="vision-content">
          <div className="vision-description">
            <p>
              Nuestra visión es ser reconocidos como el restaurante líder en innovación culinaria y servicio al cliente. Nos esforzamos por ofrecer una experiencia culinaria única y memorable a cada uno de nuestros clientes, y ser la primera elección para cualquier ocasión especial o una noche cualquiera.
            </p>
          </div>
          <div className="vision-image">
            <img width="100%" src={foto5} alt="Visión" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
        
        
      
    
