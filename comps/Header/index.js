//Use the same components to change the font size, text color of the header, onmouseover for header

import React from 'react';
import './header.css'

const Header = ({text, fontSize, color, onMouseOver}) => <div style={{color:color,fontSize:fontSize}}className = "header">
    <h1 style={{fontSize:fontSize}}>{text}</h1>
</div>

Header.defaultProps = {
    fontSize:10,
    color:"#GAT",
    text:"Header"
}

export default Header;