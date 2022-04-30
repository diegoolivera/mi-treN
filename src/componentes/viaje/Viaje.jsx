import React from 'react'

//css
import "./viaje.css"

const Viaje = () => {
    console.log("entro a viaje")
  return (
    <article>
        <div className='contentViaje'>
            <div className='contentViajeDates'>
                <p>Origen</p>
                <input type="text" id="" />
            </div>
            
            <div className='contentViajeDates'>
                <p>Destino</p>
                <input type="text" id="" />
            </div>
            <div className='contentButton'>
                <button>Buscar</button>
            </div>
        </div>

        <div className='contentTren'>
            <p className='trenTitle'>Datos tren</p>

            <div className='contentTrenDates'>
                <p>Proximo</p>
                <input type="text" id="" disabled />
            </div>
            
            <div className='contentTrenDates'>
                <p>Plataforma</p>
                <input type="text" id=""  disabled/>
            </div>

            <div className='contentTrenDates'>
                <p>Costo (tipo) $</p>
                <input type="text" id=""  disabled/>
            </div>
        </div>
    </article>
  )
}

export default Viaje