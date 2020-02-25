import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Header from './Header'
import Adapter from 'enzyme-adapter-react-16'
import { findByTestAtrr } from '../../../Utils/index'

Enzyme.configure({adapter: new Adapter() })

const setUp = props => {
   const compenent = shallow(<Header {...props} />)
   return compenent
}

describe('Header Component', () => {

   let compenent; 
   beforeEach(() => {
      compenent = setUp(); 
   })
   it('It should render', () => {
   const wrapper = findByTestAtrr(compenent, 'header')
   expect(wrapper.length).toBe(1)
   })
   it('wrap', ()=>{
      const wrapper = findByTestAtrr(compenent, 'wrap')
      expect(wrapper.length).toBe(1)
   })
   it('logo', ()=>{
      const wrapper = compenent.find('img')
      expect(wrapper.length).toBe(1)
   })
})
