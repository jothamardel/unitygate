import React from 'react';


const SearchBoxExtension = ({ search }) => {
    return (
        <div className='' style={{}}>
            <div className='pa4 br3 shadow-5 w-50 center'>
                <input 
                className='f4 pa2 w-50 br1' 
                type='search'
                id='gosa' 
                placeholder='Search for old student'>
                </input>
                <button className='w-30 grow f4 link ph3 pv2 dib white bg-green br2' onClick={search}>Search</button>
            </div>
        </div>
    );
}

export default SearchBoxExtension;