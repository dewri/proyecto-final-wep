import React, { useEffect, useState } from 'react'
import {getDocs, collection, doc} from "firebase/firestore"
import { BD } from '../configuracion-fire';

function Home() {
  const collectionPubli = collection(BD,"publicaciones")
  const [lista,s_lista] = useState([])
  useEffect(()=>{
    const cargarLista = async () =>{
      const datos= await getDocs(collectionPubli);
      s_lista(datos.docs.map((doc)=>({...doc.data(), id: doc.id})))
    }
    cargarLista();
  })
  return (
    <div className='homepage'>
       {lista.map((contenido) => {
         return <div className='publicacion'> 
         <div className='header'>
           <div className='tilulo'>
             <h2>{contenido.titulo}</h2>
           </div>
         </div>
         <div className='contenido'> {contenido.contenido}</div>
         <h5>@{contenido.autor.nombre}</h5>
         </div>
       })} 
    </div>
  )
}
export default Home