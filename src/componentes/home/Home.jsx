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
  const buttonPage2 = useRef(null)

  
  const setBoleto= (tb)=>{
    setTipoBoleto(tb)
  }

  const changePag2 = ()=>{
    setPagina2(true)
  }
  const changePag = ()=>{
    setPagina2(false)
    buttonPage2.classList.remove("activar")
    buttonPage.classList.add("activar")
  }
  return (
    <main>
        <div className='flex'>
          <p className={pagina2? null:"activar"} ref={buttonPage} onClick={changePag}>Viaje</p>
          <p className={pagina2? "activar":null} onClick={changePag2}>Datos</p>
        </div>
        <div>
          {pagina2? <DatoBoleto sb={setBoleto} /> : <Viaje tb={tipoBoleto}/> }
        </div>
    </main>
  )
}

export default Home