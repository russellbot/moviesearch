import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            movies: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?s=star+wars&apikey=469942e0')
            .then(response=> response.json())
            .then(movie => this.setState({ movies: movie.Search}));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { movies, searchfield } = this.state;
        const filteredMovies = movies.filter(movie => {
            return movie.Title.toLowerCase().includes(searchfield.toLowerCase());
        })
        if (movies.length === 0) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className = 'tc'>
                    <h1 className='f1'>star wars movie search</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList movies={filteredMovies} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;