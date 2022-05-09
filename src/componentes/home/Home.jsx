import React,{useState,useRef} from 'react'

//css
import "./home.css"
//components
import Viaje from '../viaje/Viaje';
import DatoBoleto from '../boleto/DatoBoleto';

const Home = () => {
  const [pagina2,setPagina2] = useState(false)
  const [tipoBoleto,setTipoBoleto] = useState("General")
  const buttonPage = useRef(null)
  
  const setBoleto= (tb)=>{
    setTipoBoleto(tb)
  }
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
          {pagina2? <DatoBoleto sb={setBoleto} /> : <Viaje tb={tipoBoleto}/> }
        </div>
    </main>
  )
}

export default Home