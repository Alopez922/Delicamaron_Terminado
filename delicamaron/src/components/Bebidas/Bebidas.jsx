import React from "react";
import Navreact from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
import Footer from "../Footer/Footer";
import { getBebidas } from "../../actions";
import {useDispatch, useSelector} from "react-redux";
import { useState, useEffect } from "react";
import "./bebidas.css"
import CardBebi from "../Card/CardBebi";



export default function Bebidas(){
    const dispatch = useDispatch()
    const Bebidas = useSelector((state)=>state.bebidas)
    
    const [loaded, setLoaded] = useState(Bebidas.length?true:false)

    useEffect(()=>{
        if(!loaded){
            dispatch(getBebidas())
           
        }
    },[loaded,dispatch])

    return(
        <div className="Bebida-Container">
            <Navreact/>
            <Slider/>

            <div className="bebida-text">
                <h1>Bebidas</h1>
            </div>

            <div className="fondo-carta">
        <div className="positions">
        {
  Bebidas.length>0?
  Bebidas.map((el) =>{
 return(
   <div key={el.id}>
   <CardBebi nombre={el.nombre} imagen={el.imagen} />
   </div>
 )

  }):<div className="loading">"no pasa nada"</div> 

  }
        </div>
          </div>
          <Footer/>
       </div>

        
    )
}