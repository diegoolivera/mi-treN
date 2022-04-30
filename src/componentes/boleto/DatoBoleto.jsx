import React from 'react'
//css
import "./datoBoleto.css"

const DatoBoleto = () => {
  return (
    <article className='contentTipoBoleto'>
        <div className='categories'>
            <p>Tipo Boleto</p>
            <select  >
                <option>Jubilado</option>
                <option>Estudiante</option>
                <option>Discapacitado</option>
                <option>Obrero</option>
                <option>Ninguno</option>
            </select>
        </div>
    </article>
  )
}

export default DatoBoleto