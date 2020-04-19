//Use the same components to change the font size, text color of the header, onmouseover for header

import React from 'react';
import './header.css'

const Header = ({fontSize, color, onMouseOver}) => <div style={{color:color,fontSize:fontSize}}className = "header" onMouseOver={onMouseOver}>
    <h1>Header</h1>
</div>

function MouseOver() {
    alert("mouse is over")
}

Header.defaultProps = {
    fontSize:10,
    color:"#GAT",
    onMouseOver:MouseOver()
}

export default Header;