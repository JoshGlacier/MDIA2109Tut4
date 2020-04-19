import React, {useState, useEffect} from 'react';
import './cb.css';
//Made the UI
const CustomButton = ({text, color, onClick}) => <div style={{backgroundColor:color,boxShadow:"1px 1px 5px"+color}}className = "custom_button_box" onClick={onClick}>
    <div className = "custom_button_box_inner">
        {text}
        
    </div>
</div>



function ButtonClick(){
 <CustomButton text={"Ok"}/>
}

function ChangeButton(){
    alert("Clicked")
    
}

CustomButton.defaultProps = {
    text:"Default Button",
    color:"green",
    onClick:ButtonClick()
}


export default CustomButton; 
