import React, { Component } from 'react';
import { connect} from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/Header';
import './App.css';

import { setSearchField, requestMovies } from '../actions.js';

const mapStateToProps = state => {
    return {
        searchField: state.searchMovies.searchField,
        movies: state.requestMovies.movies,
        isPending: state.requestMovies.isPending,
        error: state.requestMovies.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestMovies: () => dispatch(requestMovies())
    }
}

class App extends Component {
   
    componentDidMount() {
        this.props.onRequestMovies();
    }

    render() {
        const { searchField, onSearchChange, movies, isPending } = this.props;
        const filteredMovies = movies.filter(movie => {
            return movie.Title.toLowerCase().includes(searchField.toLowerCase());
        })
        return isPending ?
            <h1>Loading</h1> :
            (
                <div className = 'tc'>
                    <Header />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);