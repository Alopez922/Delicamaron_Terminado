import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createBebidas } from "../../actions";
import axios from "axios";
import logo from "../../utils/imagenes/logo2.png";
import "./bebidaCreate.css"

function validate(input) {
    const errors = {};
    if (!input.nombre) {
        errors.name = "Name is Invalid";
    }
    return errors;
}

export default function BebidaCreate() {
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        nombre: "",
        imagen: ""
    });
    const [errors, setErrors] = useState({});

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });

        setErrors(
            validate({
                ...input,
                [e.target.name]: e.target.value
            })
        );
    }

    const [preview, setPreview] = useState(null);

    const [disableButton, setDisableButton] = useState(true);

    useEffect(() => {
        if (input.nombre === "") {
            setDisableButton(true);
        } else {
            setDisableButton(false);
        }
    }, [errors, input, setDisableButton, dispatch]);

    const [file, setFile] = useState(null);

    function handleFileChange(e) {
        setFile(e.target.files[0]);
        setPreview(URL.createObjectURL(e.target.files[0]));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (!file) {
            return;
        }

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "Delicamaron");
        const res = await axios.post(
            "https://api.cloudinary.com/v1_1/deldonynt/image/upload",
            formData
        );
        const imageURL = res.data.secure_url;

        dispatch(createBebidas({ ...input, imagen: imageURL }));
        setInput({
            nombre: "",
            imagen: ""
        });
        alert("BEBIDA CREADA CON EXITO");
        window.location.reload();
    }


    return(
        <div className="contenedor">
        <div className="fondoCreate">
            <form  onSubmit={handleSubmit} className="form">
                <div className="logo-deli">
                    <img src={logo} alt=""  width="200"/>
                </div>
                
                <div>
                    <label>Nombre:</label>
                    <input type="text"
                    className={errors.name && "danger"} 
                    name="nombre"
                    value={input.nombre}
                    onChange={handleChange}  
                    />
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
        <button type="submit" disabled={disableButton}>Crear Receta</button>
        <Link to="/">
        <button>Go Back</button>
        </Link>
      </div>
            </form>
            </div>
            </div>
    )


}