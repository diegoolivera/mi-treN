import React from 'react'

//css
import "./home.css"
//components
import Viaje from '../viaje/Viaje'

const Home = () => {
  return (
    <main>
        <div className='flex'>
            <p>Viaje</p>
            <p>Datos</p>
        </div>
        <Viaje/>
    </main>
  )
}

export default Home