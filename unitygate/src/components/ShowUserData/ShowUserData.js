import React from 'react';
import './ShowUserData.css';


const ShowUserData = ({ user, edit }) => {
    console.log('showUserDetails', user);
  return (
      <div className='container'> 
        <div className='w-third'>  
        <main className="pa4 black-80 shadow-2 bg-white">
            {/* <hr></hr> */}
            <h1 className='head green'>{ user[0].name}</h1>
            <hr></hr>
            <div className="container">
                <p className="container">{ `Year Graduated: ${user[0].year}` }</p>
                <p className="container">{ `Gender: ${user[0].gender}` }</p>
                <p className="container">{ `Mobile No: ${user[0].mobile === null ? 'N/A' : user[0].mobile}` }</p>
                <p className="container">{ `Occupation: ${user[0].occupation === null ? 'N/A' : user[0].occupation}` }</p>
                <p className="container">{ `Email: ${user[0].email === null ? 'N/A' : user[0].email}` }</p>
                <p className="container">{ `House: ${user[0].house === null ? 'N/A' : user[0].house}` }</p>
            </div>
            {/* <hr></hr> */}
            <div className='center'>
                <button className="updateprofile f6 link dim ba ph3 pv2 mb2 dib white bg-green pointer" 
                onClick={ () => edit(user[0].id)}>Update Profile</button>
                <button className="updateprofile f6 link dim ba ph3 pv2 mb2 dib white bg-green pointer" >
                    Contact { user[0].name }
                </button>
            </div>
        </main>
        </div>
    </div>
  );
}


export default ShowUserData;