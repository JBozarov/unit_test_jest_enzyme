import React from 'react'
import logo from './logo1.png'

export default function Header(props) {
   return (
      <div data-test='header'>
         <div data-test='wrap' >
         <img src={logo} data-test='img' width={40} />
         </div>
      </div>
   )
}
