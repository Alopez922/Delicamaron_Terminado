import React from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import  {Link, useNavigate} from "react-router-dom";
import { CreateFood } from "../../actions";
import axios from "axios"
import "./recetaCreate.css"
import logo from "../../utils/imagenes/logo2.png"



function validate(input){
    const errors={}
    // let regexName = new RegExp("^[a-zA-Z]{2,30}$");
    if(!input.nombre){
        errors.name = "Name is Invalid";
    }else if (!input.precio){
        errors.name = "precio is Required"
    }else if (Number(input.precio)> 100000 || Number(input.precio)< 1 || isNaN(Number(input.precio))) {
        errors.name = 'precio is invalid';
    }else if(!input.descripcion){
        errors.name = "descripcion is very longer"
    }
    return errors
    
}

export default function RecetaCreate(){
    const dispatch = useDispatch();
    const [input,setInput]=useState({
        
        nombre:"",
        descripcion:"",
        imagen:"",
        precio:"",

})
const [errors,setErrors] = useState({});

function handleChange(e){
    
    setInput({
        ...input,
        [e.target.name]:e.target.value
        
    })
  
    setErrors(validate({
        ...input,
        [e.target.name]:e.target.value
    }))
    
}

function handleSubmit(e){
    e.preventDefault()
    dispatch(CreateFood (input))

    setInput({
        nombre:"",
        descripcion:"",
        precio:"",
        imagen: "",
    })
    alert("COMIDA CREADA CON EXITO")
    window.location.reload()
}


const [preview, setPreview] = useState(null);




const [disableButton, setDisableButton]=useState(true)

useEffect(() => {
   
    if(input.nombre ===""||
   
    input.descripcion===""||
    input.descripcion.length > 140 ||
    input.precio===""
    )
   {
    setDisableButton(true)
   }else{
    setDisableButton(false)
   }
    
  }, [errors,input,setDisableButton,dispatch]);

  const [file, setFile] = useState(null);

function handleFileChange(e) {
    setFile(e.target.files[0]);
    setPreview(URL.createObjectURL(file));
}

async function handleSubmit(e) {
    e.preventDefault();
    if (!file) {
        return;
    }

    // Aquí subes el archivo a Cloudinary
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "Delicamaron");
    const res = await axios.post("https://api.cloudinary.com/v1_1/deldonynt/image/upload", formData);
    const imageURL = res.data.secure_url;

    // Aquí guardas la URL en tu base de datos
    dispatch(CreateFood({ ...input, imagen: imageURL }));
    setInput({
        nombre: "",
        descripcion: "",
        precio: "",
        imagen: "",
    });
    alert("COMIDA CREADA CON EXITO");
    window.location.reload();
}


    return(
        <div className="contenedor">
        <div className="fondoCreate">
            <form  onSubmit={(e)=>handleSubmit()} className="form">
                <div className="logo-deli">
                    <img src={logo} alt=""  width="200"/>
                </div>
                
                <div>
                    <label>Nombre:</label>
                    <input type="text"
                    className={errors.name && "danger"} 
                    name="nombre"
                    // defaultValue={input.name}
                    value={input.nombre}
                    onChange={handleChange} 
                    
                    />
                </div>
                <div>
                    <label>Precio:</label>
                    <input type="number" step="1000" min="1000" max="100000"  name="precio" onChange={handleChange} defaultValue={input.precio} className={errors.precio && "danger"} />
                </div>
                <div>
                    <label>Descripcion:</label>
                    <input type="text" name="descripcion" defaultValue={input.descripcion} onChange={handleChange} className={errors.descripcion && "danger"}/>
                </div>
                
                <div> 
                {preview && <img src={preview} width="250px" height="200px" alt="preview" style={{borderRadius: "20px",  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.3)",
    border: "1px solid transparent"}} />}
                </div>
                <div>
                <label>img:</label>
                <input type="file" name="imagen" onChange={handleFileChange} />
                </div>




                <div className="botones-ordenados">  
        <button type="submit" onClick={(e)=>handleSubmit(e)} disabled={disableButton}>Crear Receta</button>
        <Link to="/">
        <button>Go Back</button>
        </Link>
      </div>
            </form>
            </div>
            </div>
    )


}