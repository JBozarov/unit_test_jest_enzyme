import checkPropTypes from 'check-prop-types'

export const findByTestAtrr = (compenent, atrr) => {
   const wrapper = compenent.find(`[data-test='${atrr}']`)
   return wrapper; 
}

export const checkProps = (compenent, expectedProps) => {
   const propsErr = checkPropTypes(compenent.propTypes, expectedProps, 'props', compenent.name)
   return propsErr
}