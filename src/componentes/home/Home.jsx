import React,{useState,useRef} from 'react'

//css
import "./home.css"
//components
import Viaje from '../viaje/Viaje';
import DatoBoleto from '../boleto/DatoBoleto';

const Home = () => {
  const [pagina2,setPagina2] = useState(false)
  const buttonPage = useRef(null)
  
  const changePag2 = ()=>{
    setPagina2(true)
  }
  const changePag = ()=>{
    setPagina2(false)
  }
  return (
    <main>
        <div className='flex'>
          <p ref={buttonPage} onClick={changePag}>Viaje</p>
          <p onClick={changePag2}>Datos</p>
        </div>
        <div>
          {pagina2? <DatoBoleto/> : <Viaje/> }
        </div>
    </main>
  )
}

export default Home