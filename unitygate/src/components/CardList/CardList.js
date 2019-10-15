import React from 'react';
import Card from '../Card/Card';

const CardList = ({ users }) => {
  return( 
      <div> 
        {  
        users.map((user, i) => {
            return (
                <Card 
                key={users[i].id} 
                id={i} 
                name={users[i].name} 
                year={users[i].year}
                gender={users[i].gender} 
                />
            );
        })
        }   
    </div>
    );    
   
}



export default CardList;