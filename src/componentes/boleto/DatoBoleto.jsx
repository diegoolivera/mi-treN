import React from 'react'
//css
import "./datoBoleto.css"

const DatoBoleto = ({sb}) => {

  const tipoBoletoSelect = (e)=>{
    sb(e.target.value)
  }
  

  return (
    <article className='contentTipoBoleto'>
        <div className='categories'>
            <p>Tipo Boleto</p>
            <select  onChange={tipoBoletoSelect} >
                <option disabled> Seleccionar </option>
                <option value="General"> General</option>
                <option value="Jubilado">Jubilado</option>
                <option value="Estudiante">Estudiante</option>
                <option value="Discapacitado"> Discapacitado</option>
                <option value="Obrero">Obrero</option>
            </select>
        </div>
    </article>
  )
}

export default DatoBoleto