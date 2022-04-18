import React, { useState } from 'react'
import {addDoc, collection} from "firebase/firestore"
import { BD,aunth } from '../configuracion-fire';
import {useNavigate} from "react-router-dom"

function CrearPubl() {
  const [titulo,s_titulo] = useState()
  const [contenido,s_contenido] = useState()
  const collectionPubli = collection(BD,"publicaciones")
  const redireccion = useNavigate();

  const Publicar= async () =>{
    await addDoc(collectionPubli,{titulo,contenido,autor:{
      nombre: aunth.currentUser.displayName, id: aunth.currentUser.uid
    }})
    redireccion("/")
  }
  return (
    <div className='crearpublipage'>
      <div className='contenedorpubli'>
        <h2>Crear Piblicacion</h2>
        <div className='inputcp'>
        <label>
          Titulo
        </label>
        <input placeholder='Titulo' onChange={(res)=>{s_titulo(res.target.value);}}></input>
        </div>
        <div className='inputcp'>
          <label>
            Contenido
          </label>
          <textarea placeholder='contenido' onChange={(res)=>{s_contenido(res.target.value);}}/>
        </div>
        <button onClick={Publicar}>Publicar</button>
      </div>
    </div>
  )
}

export default CrearPubl