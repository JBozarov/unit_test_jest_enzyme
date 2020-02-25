import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Headline.css'

export class Headline extends Component {
   constructor() {
      super(); 

      this.state = {}
   }
   render() {
      const { header, desc } = this.props; 

      if (!header) {
         return null; 
      }
      return (
         <div data-test='headlineComponent' className='headline' >
            <h1 data-test='header' > {header} </h1>
            <p data-test='desc' >
               {desc}
            </p>
         </div>
      )
   }
}

Headline.propTypes = {
   header: PropTypes.string,
   desc: PropTypes.string, 
   tempArray: PropTypes.arrayOf(PropTypes.shape({
      first: PropTypes.string, 
      last: PropTypes.string, 
      age: PropTypes.number, 
      email: PropTypes.string, 
      onlineStatus: PropTypes.bool, 
   }))
}

export default Headline
