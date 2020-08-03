import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

it('expect to render App component', () => {
    const mockStore = {
        movies: [],
        searchField: ''
    }
    expect(shallow(<App store={mockStore} />)).toMatchSnapshot();
})