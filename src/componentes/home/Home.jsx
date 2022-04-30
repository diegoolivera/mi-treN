import React from 'react'

//css
import "./home.css"
//components
import Viaje from '../viaje/Viaje'
import DatoBoleto from '../boleto/DatoBoleto'

const Home = () => {
  return (
    <main>
        <div className='flex'>
            <p>Viaje</p>
            <p>Datos</p>
        </div>
        {/* <Viaje/> */}
        <DatoBoleto/>
    </main>
  )
}

export default Home