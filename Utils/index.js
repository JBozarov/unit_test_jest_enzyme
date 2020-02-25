export const findByTestAtrr = (compenent, atrr) => {
   const wrapper = compenent.find(`[data-test='${atrr}']`)
   return wrapper; 
}