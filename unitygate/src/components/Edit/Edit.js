import React from 'react';
import './Edit.css';


const Edit = ({ user, view }) => {
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
                    className="input-reset ba b--black-20 pa2 mb2 db w-100" aria-describedby="name-desc"
                    placeholder={ `ID: ${user[0].id}`} 
                    type="text" 
                    name="ID"
                    disabled  
                    id="ID"></input>
                </div> 
                <div className="mt3"> 
                {/* <p className='green'>NAME:</p>   */}
                    <input 
                    className="input-reset ba b--black-20 pa2 mb2 db w-100" aria-describedby="name-desc" 
                    type="text" 
                    name="name"  
                    placeholder={`Name:  ${user[0].name}`}
                    id="name"></input>
                </div>
                <div className="mt3">
                    {/* <p className='green'>YEAR:</p>    */}
                    <input 
                    className="input-reset ba b--black-20 pa2 mb2 db w-100" aria-describedby="name-desc" 
                    type="text" 
                    name="year"
                    placeholder={`Year:  ${user[0].year}`}  
                    id="year"></input>
                </div>
                <div className="mt3">
                    {/* <p className='green'>HOUSE:</p>    */}
                    <select  
                    className="input-reset ba b--black-20 gray pa2 mb2 db w-100" aria-describedby="name-desc"
                    name="house"
                    placeholder={`House:  ${user[0].house === null ? '': user[0].house}`}  
                    id="house">
                        <option value="aggrey">Aggrey</option>
                        <option value="curie">Curie</option>
                        <option value="carver">Carver</option>
                        <option value="keller">Keller</option>
                        <option value="livingstone">Livingstone</option>
                        <option value="nightingale">Nightingale</option>
                        <option value="crowther">Crowther</option>
                        <option value="slessor">slessor</option>
                    </select>
                </div>
                <div className="mt3">
                    {/* <p className='green'>MOBILE:</p>    */}
                    <input 
                    className="input-reset ba b--black-20 pa2 mb2 db w-100" aria-describedby="name-desc"
                    type="text" 
                    name="mobile"
                    placeholder={`Mobile:  ${user[0].mobile === null ? '': user[0].mobile}`}  
                    id="mobile"></input>
                </div>
                <div className="mt3">
                    {/* <p className='green'>EMAIL:</p>    */}
                    <input 
                    className="input-reset ba b--black-20 pa2 mb2 db w-100" aria-describedby="name-desc" 
                    type="email" 
                    name="email"  
                    placeholder={`Email:  ${user[0].email === null ? '': user[0].email}`}
                    id="email"></input>
                </div>
                <div className="mt3">
                    {/* <p className='green'>OCCUPATION</p>    */}
                    <select  
                    className="input-reset ba b--black-20 gray pa2 mb2 db w-100" aria-describedby="name-desc"
                    name="occupation"
                    placeholder={`House:  ${user[0].occupation === null ? '': user[0].occupation}`}  
                    id="occupation">
                        <option value="lawyer">Lawyer</option>
                        <option value="doctor">Doctor</option>
                        <option value="teacher">Teacher</option>
                        <option value="engineer">Engineer</option>
                        <option value="politician">Politician</option>
                        <option value="business">Business</option>
                        <option value="student">Student</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            
                <div className="mt3">
                    <button 
                    className="b ph3 pv2 input-reset ba b--white bg-transparent bb bg-green white grow pointer f6 dib" 
                    type="submit" 
                    value="">Update</button>
                    <button 
                    className="b ph3 pv2 input-reset ba b--white bg-transparent bb bg-green white grow pointer f6 dib" 
                    type="submit" 
                    value=""
                    onClick={ () => view(user[0].id)}>View Profile</button>
                </div>
            </form>
        </main>
        </div>
    </div>
  );
}


export default Edit;