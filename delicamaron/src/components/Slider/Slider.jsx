import React from 'react'
import {Carousel} from 'react-bootstrap'
import arroz from "../../utils/imagenes/delicamaron arroz.jfif"
import huevas from "../../utils/imagenes/Huevas.jfif"
import coctel from "../../utils/imagenes/Coctel.jfif"
import fix from "../../utils/imagenes/fishAndShips.jfif"
import ajillo from "../../utils/imagenes/ajillo.jfif"
import "./slider.css"

export default function Sliders() {
    return (
        <>
            <Carousel className='imagen' >
                <Carousel.Item className='imagen-img' interval={1000} >
                    <img
                        // className="d-block w-100"
                        src={arroz}
                        alt="First slide" />
                    <Carousel.Caption className='descripcion'>
                        <h3>Arroz de Camaron</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        // className="d-block w-100"
                        src={huevas}
                        alt="Second slide" />
                    <Carousel.Caption className='descripcion'>
                        <h3>Huevas de Pescao</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        // className="d-block w-100"
                        src={coctel}
                        alt="Third slide" />
                    <Carousel.Caption className='descripcion'>
                        <h3>Coctel de Camaron</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        // className="d-block w-100"
                        src={fix}
                        alt="Third slide" />
                    <Carousel.Caption className='descripcion'>
                        <h3>Fish and Ships</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        // className="d-block w-100"
                        src={ajillo}
                        alt="Third slide" />
                    <Carousel.Caption className='descripcion'>
                        <h3>Camarones al Ajillo</h3>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </>
    )
}
