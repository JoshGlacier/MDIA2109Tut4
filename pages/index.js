import Link from 'next/link';
import Router from 'next/router';
import './app.css';
import {FaSearchengin} from 'react-icons/fa';
import {TiAdjustBrightness} from "react-icons/ti";
import {TiBeer} from 'react-icons/ti';
import {TiAttachmentOutline} from "react-icons/ti";


function ClickIndex(){
    document.querySelector("#main_app").style.right = "-100%";
    setTimeout(function() {
        Router.push("/chatpage");
    }, 1000)
    }


const Index = () => <div id="main_app">
    <div onClick={ClickIndex}>Index</div>
    <FaSearchengin> </FaSearchengin>
    <Link href ="/chatpage">Chats!</Link>
    <TiBeer></TiBeer>
    <Link href ="/Contact">Contact Me!</Link>
    <TiAdjustBrightness></TiAdjustBrightness>
    <Link href ="/Bio">Biography!</Link>
    <TiAttachmentOutline></TiAttachmentOutline>
    <Link href ="/About">About!</Link>
</div>

export default Index;