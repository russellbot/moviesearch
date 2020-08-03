import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
    const mockProps = {
        onRequestMovies: jest.fn(),
        movies: [],
        searchField: '',
        isPending: false
    }
    wrapper = shallow(<MainPage { ...mockProps} />)
})

it('renders MainPage without crashing', () => {
    expect(wrapper).toMatchSnapshot();
}) 

it('filters movies correctly', () => {
    const mockProps2 = {
        onRequestMovies: jest.fn(),
        movies: [{
            id: 4,
            Title: 'john',
            Year: '1984'
        }],
        searchField: 'John',
        isPending: false
    }
    const wrapper2 = shallow(<MainPage { ...mockProps2} />)
    expect(wrapper2.instance().filterMovies()).toEqual([{
        id: 4,
        Title: 'john',
        Year: '1984'
    }]);
})

it('filters movies correctly 2', () => {
    const mockProps3 = {
        onRequestMovies: jest.fn(),
        movies: [{
            id: 4,
            Title: 'john',
            Year: '1984'
        }],
        searchField: 'a',
        isPending: false
    }
    const filteredMovies = []
    const wrapper3 = shallow(<MainPage { ...mockProps3} />)
    expect(wrapper3.instance().filterMovies()).toEqual(filteredMovies);
})