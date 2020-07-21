import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
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
        const filteredMovies = this.state.movies.filter(movies => {
            return movies.Title.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className = 'tc'>
                <h1 className='f1'>star wars movie search</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList movies={filteredMovies} />
            </div>
        );
    }
}

export default App;