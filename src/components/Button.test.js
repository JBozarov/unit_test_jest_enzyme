import React from 'react';
import Button from './Button'
import {shallow,configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// it("testing onclose event", () => {
//     const props = {
//         toggle: true
//     };
//     const setToggle = jest.fn(); 
//     const component = shallow(<Button { ...props } />) 
//     component.find('[id="Dialog-id-test"]').simulate('close')
//     // expect(props.open).toBe(undefined); 
//     // expect(component.instance().props.open).toBeTruthy();  
//     const handleClick = jest.spyOn(React, "useState"); 
//     handleClick.mockImplementation(toggle => [toggle, setToggle])
//     expect(setToggle).toBeTruthy(); 
// })

it("testing onclose event", () => {
    const component = shallow(<Button />) 
    const button = component.find('[id="click-btn"]')
    button.simulate('click')
    const h1tag = component.find('[id="true-tag"]')
    expect(h1tag.length).toBe(1)
})
