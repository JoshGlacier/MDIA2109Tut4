import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import './bio.css';
import { GiCaveman } from "react-icons/gi";


const Contact = () => <div>
    <Header text="Biography of Jerry Seinfeld" fontSize="24"/>
    <GiCaveman></GiCaveman>
    <CustomButton color = {"indigo"} text='Seinfeld Button'/>
    Jerome Allen Seinfeld (/ˈsaɪnfɛld/ SYNE-feld; born April 29, 1954)[1] is an American comedian, actor, writer, producer, and director. He is known for playing a semi-fictionalized version of himself in the sitcom Seinfeld, which he created and wrote with Larry David. The show aired on NBC from 1989 until 1998, becoming one of the most acclaimed and popular sitcoms of all time. As a stand-up comedian, Seinfeld specializes in observational comedy. In 2005, Comedy Central named Seinfeld the "12th Greatest Stand-up Comedian of All Time".[2]

Seinfeld produced, co-wrote and starred in the 2007 film Bee Movie. In 2010, he premiered a reality series called The Marriage Ref, which aired for two seasons on NBC. Seinfeld is the creator and host of the series Comedians in Cars Getting Coffee on Netflix. He is married to author and philanthropist Jessica Seinfeld, with whom he has three children.
</div>

export default Contact;