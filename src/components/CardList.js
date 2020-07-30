import React from 'react';
import Card from './Card';


const CardList = ({ movies }) => {
    console.log('cardlist')
    return (
        <div>
            {
                movies.map((user, i) => {
                    return (
                        <Card 
                            key={i} 
                            id={movies[i].imdbID} 
                            title={movies[i].Title} 
                            year={movies[i].Year} 
                            poster={movies[i].Poster}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList