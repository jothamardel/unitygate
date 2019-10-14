import React from 'react';
import './Card.css';
import AvatarsGreen from '../Avatars/AvatarMaleGreen.png';
import AvatarsRed from '../Avatars/AvatarMaleRed.png';
import AvatarsBlue from '../Avatars/AvatarMaleBlue.png';
import AvatarsYellow from '../Avatars/AvatarMaleYellow.png';

const image = [AvatarsBlue, AvatarsGreen, AvatarsRed, AvatarsYellow]


const Card = ({ name, year }) => {
    var num = Math.floor(Math.random() * 4)
    return (
        <div className='card'>
            <div className='container'>
                <section className="tc pa3 pa5-ns grow">
                    <article className="hide-child relative ba b--black-20 mw5 center shadow-2">
                        <img 
                        src={image[num]} className="db" alt="visual rep of gosa" />
                        <div className="pa2 bt b--black-20">
                        <h1 className="f6 db white hover-light-yellow">{ name }</h1>
                        <p className="f6 white mv1">{ year }</p>
                        <a className="link tc ph3 pv1 db bg-animate bg-green hover-bg-blue white f6 br1" href='#' >View Profile</a>
                        </div>
                        <p className="child absolute top-1 right-1 ba bw1 black-40 grow no-underline br-100 w1 h1 pa2 lh-solid b" >×</p>
                    </article>
                </section>
            </div>
        </div>
    );
}

export default Card;