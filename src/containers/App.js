import React, { Component } from 'react';
import { connect} from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

import { setSearchField } from '../actions.js';

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends Component {
    constructor() {
        super()
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        fetch('https://www.omdbapi.com/?s=star+wars&apikey=469942e0')
            .then(response=> response.json())
            .then(movie => this.setState({ movies: movie.Search}));
    }

    render() {
        const { movies } = this.state;
        const { searchField, onSearchChange } = this.props;
        const filteredMovies = movies.filter(movie => {
            return movie.Title.toLowerCase().includes(searchField.toLowerCase());
        })
        if (movies.length === 0) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className = 'tc'>
                    <h1 className='f1'>star wars movie search</h1>
                    <SearchBox searchChange={onSearchChange} />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);