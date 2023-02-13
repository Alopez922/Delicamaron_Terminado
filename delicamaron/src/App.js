import './App.css';
import { BrowserRouter as Router, Routes, Route, Form,} from "react-router-dom";
import Home from "./components/Home/Home.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import RecetaCreate from "./components/RecetaCreate/RecetaCreate.jsx"
import Bebidas from './components/Bebidas/Bebidas';
import Nosotros from './components/Nosotros/Nosotros';
import BebidaCreate from './components/BebidaCreate/BebidaCreate';
import axios from "axios";
axios.defaults.baseURL = "https://delicamaronterminado-production.up.railway.app/";


function App() {
  return (
    <Router>
     <div className="App">
      
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<RecetaCreate/> }/>
      <Route path="/bebidas" element={<Bebidas/>}/>
      <Route path="/nosotros" element={<Nosotros/>} />
      <Route path='/createBebi' element={<BebidaCreate/> } />

      
      </Routes>
    </div>
    </Router>
  );
}

export default App;
