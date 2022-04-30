import React from 'react'

//css
import "./header.css"


//icon
import { GrTrain } from "react-icons/gr";

const Header = () => {
  return (
    <header className='header'>
        <div className='ContentTitle'>
            <h1 className='title'>Mi TreN</h1>
        </div>
        <div  className='contentLogo'>
            <GrTrain className='logo'/>
        </div>
    </header>
  )
}

export default Header