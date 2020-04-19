import React from 'react';
import CustomButton from '../comps/CustomButton';
import Header from '../comps/Header';
import Input from '../comps/Input';
import Chat from '../comps/Chat';
import ChatPage from '../pages/ChatPage';


export default {
    title:'My Comps',
    component:CustomButton
};

export const MyCustomButton = () => <CustomButton/>;

function CancelClick(){
    alert("Cancel");
}

export const MyCustomButtonWithOptions = () => <CustomButton
color="#999"
text="Cancel"
onClick={CancelClick}


/>;
export const MyHeader = () => <Header/>;
export const MyInput = () => <Input/>;
export const MyInputWithPlaceholder = () => <Input
 placeholder="Custom Placeholder"/>;

export const MyChat = () => <Chat/>;
export const MyChatPage = () => <ChatPage/>;

/*export const PageWithCustomButtons = () =>
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
*/
