import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import {MdLocalDrink} from "react-icons/md";
import {FiPhone} from "react-icons/fi";
import "./navbar.css"
import logo from "../../utils/imagenes/logo2.png"
import {AiFillHome} from "react-icons/ai"
import {FaUsers} from "react-icons/fa"
import {IoLogoWhatsapp} from "react-icons/io"


export default function Navreact(){
  const handleContactClick = () => {
    window.open("https://wa.me/message/LOR4YF4MCD7GP1", "_blank");
  };
return(
  <Navbar className='nav-container' bg="light" expand="lg">

    <Container>
    
  <Navbar.Brand className='titulo-nav' href="/">
  <img className='logo-img' width="100px" src={logo} alt="" />
  
   <strong className='strong-text'>Delicamaron</strong> 
  </Navbar.Brand>
    </Container>
  <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggle" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Container>
    <Nav className="mr-auto">
      <Nav.Link href="/"><AiFillHome/> Home</Nav.Link>
      <Nav.Link href="/bebidas"><MdLocalDrink/>  Bebidas</Nav.Link>
      <Nav.Link onClick={handleContactClick}><IoLogoWhatsapp/>Contacto </Nav.Link>
      <Nav.Link href='/nosotros'><FaUsers/>Conocenos</Nav.Link>
    </Nav>
    </Container>
    
  </Navbar.Collapse>
</Navbar>
)
}