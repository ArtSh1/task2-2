import React from "react";
import './App.css'
import AboutUsItem from "./AboutUsItem";
import { useState } from 'react';
import {AiOutlineArrowDown} from 'react-icons/ai';



const AboutUsText = () => {

    const [showAboutItem , setShowAboutItem] = useState(false);

    return <div className="aboutusText">

        <button className='btnChild' onClick={(() => setShowAboutItem(true))}>How does Parkname seperate itself from other domain name parking companies?< AiOutlineArrowDown className="arrow1"/> </button>
        {showAboutItem && <AboutUsItem />}
         <button className='btnChild' onClick={(() => setShowAboutItem(true))}>Is Parkname Parking actually free?< AiOutlineArrowDown className="arrow1"/></button>
         <button className='btnChild' onClick={(() => setShowAboutItem(true))}>What you do?< AiOutlineArrowDown  className="arrow1"/></button>
         <button className='btnChild' onClick={(() => setShowAboutItem(true))}>When was Parkname First founded?< AiOutlineArrowDown className="arrow1"/></button>

       

    </div>
}






export default AboutUsText;