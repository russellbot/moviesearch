import React, { Component } from 'react';
import { connect} from 'react-redux';
import MainPage from '../components/MainPage';
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
    render() {
        return <MainPage { ...this.props } />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);