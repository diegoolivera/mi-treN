import React,{useRef,useState} from 'react'

//css
import "./viaje.css"
//clases
import LogicaViaje from '../../utils/Viaje'

const v = new LogicaViaje()
const Viaje = ({tb}) => {
    
    const[totalViaje,setTotalViaje] = useState(0)
    const[datoTren,setDatoTren] = useState({})
    const [selectOrigen,setSelectOrigen] = useState("")
    const [selectDestiny,setSelectDestiny]= useState("")
  
    const inputProximo = useRef(null)
    const inputPlataforma = useRef(null)
    const inputTotal = useRef(null)
    
    
    const categoriasOrigen = v.getAllCities()
    const categoriasDestino = v.getSomeCities(selectOrigen)
    
   
    const origenSelect = (e)=>{
        setSelectOrigen(e.target.value)
    }
    const destinoSelect = (e)=>{
        setSelectDestiny(e.target.value)
    }


    const search = ()=>{
        let total = v.total(selectOrigen,selectDestiny,tb)
        setTotalViaje(total)
        setDatoTren(v.getDatosViaje())
        fillFields()
        
    }

    const fillFields = ()=>{
        inputProximo.current.value = datoTren.proximo
        inputPlataforma.current.value = datoTren.plataforma
        inputTotal.current.value = totalViaje
    }
 
  return (
    <article>
        <div className='contentViaje'>
            <div className='contentViajeDates'>
                <p>Origen</p>
                <select  onChange={origenSelect}>
                    <option selected disabled value="">Seleccionar</option>
                    {
                        categoriasOrigen.map(c=>{
                            return(
                                <option  value={c.name}>{c.name}</option>
                            )
                            
                        })
                    }
                </select>
                
            </div>
            
            <div className='contentViajeDates'>
                <p>Destino</p>
                <select  onChange={destinoSelect} >
                    <option selected disabled value="">Seleccionar</option>
                    {
                        categoriasDestino.map(c=>{
                            return(
                                <option value={c.name}>{c.name}</option>
                            )
                            
                        })
                    }
                </select>
            </div>
            <div className='contentButton'>
                <button onClick={search}>Buscar</button>
            </div>
        </div>

        <div className='contentTren'>
            <p className='trenTitle'>Datos tren</p>

            <div className='contentTrenDates'>
                <p>Proximo</p>
                <input ref={inputProximo} type="text" id="" disabled />
            </div>
            
            <div className='contentTrenDates'>
                <p>Plataforma</p>
                <input ref={inputPlataforma} type="text" id="" disabled  />
            </div>

            <div className='contentTrenDates'>
                <p>Costo [{tb}] $</p>
                <input ref={inputTotal} type="number" id="" disabled  />
            </div>
        </div>
    </article>
  )
}

export default Viaje