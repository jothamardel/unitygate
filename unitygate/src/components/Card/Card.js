import React from 'react';
import './Card.css';
import Avatars from '../Avatars/AvatarMaleGreen.png';

const Card = ({ name, year}) => {
    return (
        <div className='card'>
            <div className='container'>
                <section className="tc pa3 pa5-ns grow">
                    <article className="hide-child relative ba b--black-20 mw5 center shadow-2">
                        <img 
                        src={Avatars} className="db" alt="Photo of Jesse Grant" />
                        <div className="pa2 bt b--black-20">
                        <h1 className="f6 db white hover-light-yellow">{name} Mbiplang Ardel</h1>
                        <p className="f6 black mv1">{year} 2009</p>
                        <a className="link tc ph3 pv1 db bg-animate bg-green hover-bg-blue white f6 br1" href="#">View Profile</a>
                        </div>
                        <a className="child absolute top-1 right-1 ba bw1 black-40 grow no-underline br-100 w1 h1 pa2 lh-solid b" href="#">×</a>
                    </article>
                </section>
            </div>
        </div>
    );
}

export default Card;