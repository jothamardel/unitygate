import React from 'react';
import './Edit.css';


const Edit = ({ user }) => {
    console.log(user);
  return (
      <div className='form'> 
        <div className='w-third'>  
        <main className="pa4 black-80 shadow-2 bg-white">
            <h1 className='green'>Hello, { user[0].name}</h1>
            <form className="measure center">
                <div className="mt3">
                    {/* <p className='green'>ID</p> */}
                    <input 
                    className="pa2 input-reset ba bg-transparent bb black-80 bg-black hover-white w-100"
                    placeholder={ `ID: ${user[0].id}`} 
                    type="text" 
                    name="ID"
                    disabled  
                    id="ID"></input>
                </div> 
                <div className="mt3"> 
                {/* <p className='green'>NAME:</p>   */}
                    <input 
                    className="b pa2 input-reset ba bg-transparent bb bg-white  hover-white w-100" 
                    type="text" 
                    name="name"  
                    placeholder={`Name:  ${user[0].name}`}
                    id="name"></input>
                </div>
                <div className="mt3">
                    {/* <p className='green'>YEAR:</p>    */}
                    <input 
                    className="b pa2 input-reset ba bg-transparent bb bg-white  hover-white w-100" 
                    type="text" 
                    name="year"
                    placeholder={`Year:  ${user[0].year}`}  
                    id="year"></input>
                </div>
                <div className="mt3">
                    {/* <p className='green'>HOUSE:</p>    */}
                    <input 
                    className="b pa2 input-reset ba bg-transparent bb bg-white  hover-white w-100" 
                    type="text" 
                    name="house"
                    placeholder={`House:  ${user[0].house === null ? '': user[0].house}`}  
                    id="house"></input>
                </div>
                <div className="mt3">
                    {/* <p className='green'>MOBILE:</p>    */}
                    <input 
                    className="b pa2 input-reset ba bg-transparent bb bg-white  hover-white w-100" 
                    type="text" 
                    name="mobile"
                    placeholder={`Mobile:  ${user[0].mobile === null ? '': user[0].mobile}`}  
                    id="mobile"></input>
                </div>
                <div className="mt3">
                    {/* <p className='green'>EMAIL:</p>    */}
                    <input 
                    className="b pa2 input-reset ba bg-transparent bb bg-white  hover-white w-100" 
                    type="email" 
                    name="email"  
                    placeholder={`Email:  ${user[0].email === null ? '': user[0].email}`}
                    id="email"></input>
                </div>
                <div className="mt3">
                    {/* <p className='green'>OCCUPATION</p>    */}
                    <input 
                    className="b pa2 input-reset ba bg-transparent bb bg-white  hover-white w-100" 
                    type="text" 
                    name="occupation"
                    placeholder={`Occupation:  ${user[0].occupation === null ? '': user[0].occupation}`}  
                    id="occupation"></input>
                </div>
            
                <div className="mt3">
                    <button 
                    className="b ph3 pv2 input-reset ba b--black bg-transparent bb bg-white grow pointer f6 dib" 
                    type="submit" 
                    value="">Update</button>
                </div>
            </form>
        </main>
        </div>
    </div>
  );
}


export default Edit;