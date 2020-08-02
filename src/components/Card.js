import React from 'react';
import { shallow, mount, render } from 'enzyme';

const Card = ({ title, year, id, poster }) => {
    return (
        <div id='card' className='tc navy bg-yellow dib br3 pa3 ma2 grow bw2 shadow-5 mh2 h7'>
            <img className='h5' alt='poster' src={poster} />
            <div>
                <h2 className='mw5 ph1 mh4'>{title}</h2>
                <p>Year: {year}</p>
            </div>
        </div>
    );
}

export default Card;