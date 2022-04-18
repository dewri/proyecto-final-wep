
import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from "./vistas/home";
import Login from "./vistas/login";
import CrearPubl from "./vistas/crearPubl";
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import {aunth} from "./configuracion-fire"


function App() {
  const [auten,s_auten] = useState(false)
  const cerrarSecion = () =>{
    signOut(aunth).then(()=>{
      localStorage.clear()
      s_auten(false)
      window.location.pathname="/login";
    })
  };
  return (
    <Router>
      <nav>
        <Link to="/">Inicio</Link>
        {!auten ? (<Link to="/login">Login</Link>): 
        (<>
        <Link to="/crearpubli">Publicar</Link>
        <button onClick={cerrarSecion}>Cerrar Secion</button>
        </>)
        }
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login s_auten={s_auten}/>}/>
        <Route path="/crearpubli" element={<CrearPubl/>}/>
      </Routes>
    </Router>
  );
}

export default App;
