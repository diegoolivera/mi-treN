import React,{useRef,useState} from 'react'

//css
import "./viaje.css"
//clases
import LogicaViaje from '../../utils/Viaje'
//sweetalert
import swal from "sweetalert2"

const v = new LogicaViaje()
const pesoFormat = Intl.NumberFormat('es-AR');
const Viaje = ({tb}) => {
    
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
        if (selectOrigen=== "" || selectDestiny==="") {
            swal.fire({
                icon: 'error',
                title: 'Complete los Campos',
                showConfirmButton: false,
                timer: 1200,
            })

           return
        }
        
        let datosTren = v.getDatosViaje()
        let total = v.total(selectOrigen,selectDestiny,tb)
        fillFields(datosTren,total)   
    }

    const fillFields = (tren,total)=>{
        inputProximo.current.value = tren.proximo + " min"
        inputPlataforma.current.value = tren.plataforma
        inputTotal.current.value = "$ " + pesoFormat.format(total)  
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
                <p >Proximo</p>
                <input ref={inputProximo} type="text" id="" readOnly />
            </div>
            
            <div className='contentTrenDates'>
                <p>Plataforma</p>
                <input ref={inputPlataforma} type="text" id="" readOnly  />
            </div>

            <div className='contentTrenDates'>  
                <p>Precio [{tb}]</p>
                <input ref={inputTotal} type="text" id="" readOnly />
            </div>
        </div>
    </article>
  )
}

export default Viaje