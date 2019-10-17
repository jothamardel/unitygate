import React from 'react';
import Card from '../Card/Card';

const CardList = ({ users, view }) => {
    // console.log(view)
  return( 
      <div> 
        {  
        users.map((user, i) => {
            return (
                <Card 
                key={users[i].id} 
                id={users[i].id} 
                name={users[i].name} 
                year={users[i].year}
                gender={users[i].gender}
                view={view}
                />
            );
        })
        }   
    </div>
    );    
   
}



export default CardList;