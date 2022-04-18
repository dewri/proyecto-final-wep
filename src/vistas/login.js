import React from 'react';
import{aunth, proveedor} from "../configuracion-fire";
import{signInWithPopup} from "firebase/auth";
import {useNavigate} from "react-router-dom"

function Login({s_auten}) {
    const redireccion = useNavigate();
    const iniciarseciongoogle = () =>{
        signInWithPopup(aunth,proveedor).then((resultado)=>{
            localStorage.setItem("auten", true)
            s_auten(true)
            redireccion("/")
        })
    }
  return (
    <div className='loginPage'>
        <p>
            Favor Iniciar Secion Con Google
        </p>
        <button onClick={iniciarseciongoogle} className='LoginBoton'>Iniciar Con Google</button>
    </div>
  )
}

export default Login