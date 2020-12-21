import React, {useState } from 'react'


const Button = props => {
    const [toggle, setToggle ] = useState(false); 

    const handleClick = () => setToggle(!toggle)


    return (
        <div>
            {toggle && <h1 id="true-tag" > Button clicked </h1>}
            <h2>Welcome </h2>
            <button id="click-btn" onClick={handleClick} >Click to change </button>
        </div>
    ) 
}

export default Button;
