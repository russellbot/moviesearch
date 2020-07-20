import React from 'react';

const Card = ({ title, director, id }) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
            <img alt='poster' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{title}</h2>
                <p>{director}</p>
            </div>
        </div>
    );
}

export default Card;