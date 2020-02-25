import React from 'react'
import logo from './logo1.png'
import './Header.css'

export default function Header(props) {
   return (
      <div data-test='header' >
         <div data-test='wrap' className='header' >
         <img src={logo} data-test='img' width={40} />
         <h2>Header</h2>
         </div>
      </div>
   )
}
