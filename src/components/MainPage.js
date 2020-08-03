import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/Header';
import './MainPage.css';

class MainPage extends Component {   
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

export default MainPage;