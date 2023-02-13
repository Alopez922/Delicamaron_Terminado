import React from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import Navreact from "../Navbar/Navbar";
import { getRecetas } from "../../actions";
import Card from "../Card/Card";
import Sliders from "../Slider/Slider"
import Footer from "../Footer/Footer"
import "./home.css"
import Paginado from "../Paginado/Paginado";


export default function Home(){
const dispatch = useDispatch()
const allRecetas = useSelector((state)=>state.recetas)


//PAGINADO  NADA MAS
const [currentPage, setCurrentPage] = useState(1);
const [recetasPerPage] = useState(6);
const indexOfLastReceta = currentPage * recetasPerPage;
const indexOfFirstReceta = indexOfLastReceta - recetasPerPage;
const currentRecetas = allRecetas.slice(
  indexOfFirstReceta,
  indexOfLastReceta
);


const [loaded, setLoaded] = useState(allRecetas.length?true:false)
  const [orden,setOrden]=useState("")

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

useEffect(()=>{
    if(!loaded){
        dispatch(getRecetas())
       
    }
},[loaded,dispatch])

    return(
        <div className="Home-Container">
                    <Navreact/>
                    <Sliders/>
        
      

        <div className="menu-text">
          <h1>MENU DELICAMARON</h1>
        </div>

        <div className="fondo-carta">
        <div className="positions">
        {
  currentRecetas.length>0?
  currentRecetas.map((el) =>{
 return(
   <div key={el.id}>
   <Card nombre={el.nombre} imagen={el.imagen} descripcion={el.descripcion} id={el.id} precio={el.precio} />
   </div>
 )

  }):<div className="loading">"no pasa nada"</div> 

  }
        </div>
        
        
           <Paginado recetasPerPage={recetasPerPage} allRecetas={allRecetas.length}  paginado={paginado} setCurrentPage={setCurrentPage} currentPage={currentPage} />
  
          </div>

          <Footer/>
       </div>
        
    )
}



        {/* <Paginado recetasPerPage={recetasPerPage} allRecetas={allRecetas.length} paginado={paginado} setCurrentPage={setCurrentPage} currentPage={currentPage}/> */}
