import React from 'react';
import './SearchBox.css';




const SearchBox = ({ search }) => {
    return (
      <div className='center'>
        <h1 className='welcome f2 yellow m-0'>welcome to</h1>
        <h1 className='unity ttu  white'>{'Unity Gate'}</h1>
        <p className=' gosa f4 white'>Gindiri Old Students Association (GOSA)<br></br>BSS & GHS | <span className='yellow'>1955 - 2016</span></p>
        <div className=''>
            <div className='pa4 br3 shadow-5 w-50 center'>
                <input 
                className='f4 pa2 w-50 br1' 
                type='search' 
                placeholder='Search for old student'>
                </input>
                <button className='w-30 grow f4 link ph3 pv2 dib white bg-green br2' onClick={search}>Search</button>
            </div>
        </div>
      </div>
    )
}

export default SearchBox;