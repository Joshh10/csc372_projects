import { useState } from 'react'
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/pages/Home';
import Gallery from './components/pages/Gallery';
import Contact from './components/pages/Contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      
    

    </>
  
   
  );
}

export default App
