import React from 'react';
import Card from '../Card/Card';

const CardList = ({ users }) => {
  return( 
      <div> 
        {  
        users.map((user, i) => {
            return (
                <Card 
                key={i} 
                id={i} 
                name={users[i].name} 
                year={users[i].year} 
                />
            );
        })
        }   
    </div>
    );    
   
}



export default CardList;