import React from 'react';
import Card from '../Card/Card';

const CardList = ({ users }) => {
    return (
        <div>
            {
            users.map((students, i) => {
                <Card 
                    key={students[i].name}
                    name={students[i].name}
                    year={students[i].year}        
                />
            })
            }
        </div>
    );
}








export default CardList;