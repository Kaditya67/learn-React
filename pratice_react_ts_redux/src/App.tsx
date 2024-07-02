import React, { useEffect, useState } from 'react';
import './App.css';
import Button from './component/Button';
import Footer from './component/Footer';
import Home from './component/Home';
import Navbar from './component/Navbar';

const App: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const [bgColor, setbgColor]= useState<string>(()=>{
    const color = localStorage.getItem("bgColor");
    return color !== null ? color : "black";
  });

  useEffect(()=>{
    localStorage.setItem('bgColor',bgColor);
  },[bgColor]);

  return (
    <div className='flex flex-col justify-between'>
      <Navbar counter={counter} bgColor={bgColor}/>
      <Home setbgColor={setbgColor}/>
      <Footer />
      <Button setCounter={setCounter} counter={counter} />
    </div>
  );
};

export default App;
