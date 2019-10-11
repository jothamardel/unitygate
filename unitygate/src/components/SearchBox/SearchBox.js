import React from 'react';
import './SearchBox.css';




const SearchBox = () => {
    return (
      <div className='center'>
        <h1 className='unity ttu white'>{'Unity Gate'}</h1>
        <div className=''>
            <div className='pa4 br3 shadow-5 w-50 center'>
                <input className='f4 pa2 w-50 br1' type='search' placeholder='Search for old student'></input>
                <button className='w-30 grow f4 link ph3 pv2 dib white bg-green br2'>Search</button>
            </div>
        </div>
      </div>
    )
}

export default SearchBox;