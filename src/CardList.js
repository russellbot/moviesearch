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
                            director={robots[i].Director} 
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList