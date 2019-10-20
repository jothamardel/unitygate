import React from 'react';
import './Card.css';
import AvatarsGreen from '../Avatars/AvatarMaleGreen.png';
import AvatarsRed from '../Avatars/AvatarMaleRed.png';
import AvatarsBlue from '../Avatars/AvatarMaleBlue.png';
import AvatarsYellow from '../Avatars/AvatarMaleYellow.png';

import AvatarsFemaleGreen from '../Avatars/AvatarFemaleGreen.png';
import AvatarsFemaleRed from '../Avatars/AvatarFemaleRed.png';
import AvatarsFemaleBlue from '../Avatars/AvatarFemaleBlue.png';
import AvatarsFemaleYellow from '../Avatars/AvatarFemaleYellow.png';

const image = [AvatarsBlue, AvatarsGreen, AvatarsRed, AvatarsYellow]
const imageFemale = [AvatarsFemaleBlue, AvatarsFemaleGreen, AvatarsFemaleRed, AvatarsFemaleYellow]


const Card = ({ name, year, id, gender, view }) => {
    var num = Math.floor(Math.random() * 4)
    return (
        <div className='card'>
            <div className='container'>
                <section className="tc pa3 pa5-ns grow">
                    <article className="hide-child relative ba b--black-20 mw5 center shadow-2">
                        <img 
                        src={
                            gender === 'male' ? image[num] : imageFemale[num]
                            } className="db" alt="visual rep of gosa" />
                        <div className="pa2 bt b--black-20">
                        <h1 className="f6 db white hover-light-yellow">{ name.toUpperCase() }</h1>
                        <p className="f6 white mv1">{ year }</p>
                        <button className="f6 link dim ba ph3 pv2 mb2 dib white bg-green pointer" onClick={() => view(id)}>View Profile</button>
                        </div>
                        <p className="child absolute top-1 right-1 ba shadow-2 pointer bw1 black-40 grow no-underline br-100 w1 h1 pa2 lh-solid b" >×</p>
                    </article>
                </section>
            </div>
        </div>
    );
}

export default Card;