import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Headline from './Headline'
import Adapter from 'enzyme-adapter-react-16'
import { findByTestAtrr } from '../../../Utils/index'


Enzyme.configure({adapter: new Adapter() })

const setUp = (props={}) => {
   const compenent = shallow(<Headline {...props} />)
   return compenent
}

describe('Headline Component', () => {

   describe('Have props', () => {
      let component; 
      beforeEach(() => {
         const props = { header: 'The header', desc: 'The Desc' }
         component = setUp(props); 
      }); 

      it('Should render with props', () => {
         const wrapper = findByTestAtrr(component, 'headlineComponent')
         expect(wrapper.length).toBe(1)
      })
      it('Should find header', () => {
         const h1 = findByTestAtrr(component, 'header')
         expect(h1.length).toBe(1)
      })
      it('Should find desc', () => {
         const p = findByTestAtrr(component, 'desc')
         expect(p.length).toBe(1)
      })
   })

   describe('Have NO props', () => {
      let component; 
      beforeEach(() => {
         component = setUp(); 
      })

      it('Should NOT render with props', () => {
         const wrapper = findByTestAtrr(component, 'headlineComponent')
         expect(wrapper.length).toBe(0)
      })
   })
   
})