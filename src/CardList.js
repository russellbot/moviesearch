import React from 'react';
import Card from './Card';


const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card 
                            key={i} 
                            id={robots[i].imdbID} 
                            title={robots[i].Title} 
                            year={robots[i].Year} 
                            poster={robots[i].Poster}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList