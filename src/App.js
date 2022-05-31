import './App.css';
import { useState } from 'react';
import OtherText from './OtherText';
import AboutUsText from './AboutUsText';
import {AiOutlineArrowDown} from 'react-icons/ai';

function App() {

//const [showText , setShowText]   = useState('Why park a domain name in Parkname ?');
const [showComponent , setShowComponent] = useState(false);

const [showAboutUs , setShowAboutUs] = useState(false);



  return (
    <div className="App">
     
     
      <button className='btn' onClick={(() => setShowComponent(true))}>Why park a domain name in Parkname ? < AiOutlineArrowDown className='arrow'/></button>
      <button className='btn' onClick={(() => setShowComponent(false))} ></button>
      
      {showComponent && <OtherText />}

      <div className='aboutus'>
        
      <div className='border_div'>
        <button className='aboutBtn' onClick={(() => setShowAboutUs(true))}><img className='userimg' src='./Capture1.png'></img> About Us < AiOutlineArrowDown className='arrow' /></button>
        <p className='articles'>4 articles in this Topic</p>
      <button className='btn1' onClick={(() => setShowAboutUs(false))}></button>

      {showAboutUs && <AboutUsText />}

      </div>

      

     

      </div>



    </div>
  );
}

export default App;
