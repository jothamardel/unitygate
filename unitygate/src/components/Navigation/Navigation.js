import React from 'react';
import './Navigation.css';

const Navigation = ({ addAlumni, feedback, home, website }) => {
    return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            {/* <p className= 'f3 link dim  shadow-2 pa3 pointer ' onClick={addAlumni}>Alumni</p> */}
            <p className= 'f3 link dim  shadow-2 pa3 pointer' onClick={ home }>Home</p>
            <p className= 'f3 link dim  shadow-2 pa3 pointer' >GOSA Website</p>
            <p className= 'f3 link dim  shadow-2 pa3 pointer' onClick={feedback}>Feedback</p>
            <p className= 'f3 link dim  shadow-2 pa3 pointer'>Contact</p>
        </nav>
    )
}

export default Navigation; 
