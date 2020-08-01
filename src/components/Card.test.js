import { shallow, mount, render } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Card from './Card';

// Enzyme.configure({ adapter: new Adapter() })

it('expect to render Card component', () => {
    expect(shallow(<Card />).length).toEqual(1)
})