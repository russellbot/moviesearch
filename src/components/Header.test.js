import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header';

it('expect to render Header component', () => {
    expect(shallow(<Header />)).toMatchSnapshot();
})

let wrapper;
it('renders MainPage without crashing', () => {
    wrapper = shallow(<Header />)    
    expect(wrapper.instance().shouldComponentUpdate()).toEqual(false);
}) 