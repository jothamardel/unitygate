import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import GosaLogo from './gosalogo.png'



const Logo = () => {
    return (
      <div className='ma4 mt0'>
        <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner"> 
              <img src={GosaLogo} alt='gosa logo' ></img>
            </div>
        </Tilt>
      </div>
    )
}

export default Logo;