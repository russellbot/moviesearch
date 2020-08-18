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

    filterMovies = () => {
        return this.props.movies.filter(movie => {
            return movie.Title.toLowerCase().includes(this.props.searchField.toLowerCase());
        })
    }

    render() {
        const { onSearchChange, isPending } = this.props;
        return (
                <div className = 'tc'>
                    <Header />
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        { isPending ? <h1>Loading</h1> :
                            <ErrorBoundry>
                                <CardList movies={this.filterMovies()} />
                            </ErrorBoundry>
                        }
                    </Scroll>
                </div>
            );        
    }
}

export default MainPage;