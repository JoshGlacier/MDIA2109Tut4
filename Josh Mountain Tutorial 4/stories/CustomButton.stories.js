import React from 'react';
import CustomButton from '../comps/CustomButton';
import Header from '../comps/Header';


export default {
    title:'Custom Button',
    component:CustomButton
};

export const MyCustomButton = () => <CustomButton/>;

export const PageWithCustomButtons = () =>
 <div>
     <Header
     fontSize={30}
     color="#ABC"
     onMouseOver={MouseOver}
     />

<Header
     fontSize={15}
     color="#BED"
     onMouseOver={MouseOver}
     />

<Header
     fontSize={20}
     color="tomato"
     onMouseOver={MouseOver}
     />


    <CustomButton 
    color="#999"
    text="Cancel"
    onClick={CancelClick}/>
    <CustomButton 
    color="#3F5"
    text="OK"
    onClick={OKClick}/>
    <CustomButton 
    color="#F3F"
    text="Submit"
    onClick={SubmitClick}/>
    <CustomButton
    text="Menu"
    onClick={MenuClick}/>
</div>

function CancelClick(){
    alert("Cancel");
}

function OKClick(){
    alert("Ok");
}

function SubmitClick(){
    alert("Submitted");
}

function MenuClick(){
    alert("Menu Clicked");
}

function MouseOver() {
    alert("mouse is over")
}