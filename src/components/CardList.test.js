import { shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import CardList from './CardList';

// Enzyme.configure({ adapter: new Adapter() })

it('expect to render CardList component', () => {
    const mockMovies = [
        {
            IMDBid: 0,
            title: 'Star Wars',
            year: 2020,
            poster: 'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'
        }
    ]
    expect(shallow(<CardList movies={mockMovies} />)).toMatchSnapshot();
})