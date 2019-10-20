import React from 'react';
import './Navigation.css';

const Navigation = ({ addAlumni, feedback, home, website }) => {
    return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            {/* <p className= 'f3 link dim  shadow-2 pa3 pointer ' onClick={addAlumni}>Alumni</p> */}
            <a className= 'f3 link dim  shadow-2 white pa3 pointer' rel="noopener noreferrer" onClick={ home }>Home</a>
            <a className= 'f3 link dim  shadow-2 white pa3 pointer' target='_blank' rel="noopener noreferrer" href='http://gosanigeria.com' >GOSA Website</a>
            <a className= 'f3 link dim  shadow-2 white pa3 pointer' rel="noopener noreferrer" onClick={feedback}>Feedback</a>
            <a className= 'f3 link dim  shadow-2 white pa3 pointer' rel="noopener noreferrer">Contact</a>
        </nav>
    )
}

export default Navigation; 
