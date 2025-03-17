import './App.css';
// import Footer from './components/Footer';
// import Navbar from './components/Navbar';

// import Home from './components/pages/Home';
// import Aboutus from './components/pages/Aboutus';
// import Contactus from './components/pages/Contactus';
// import Services from './components/pages/Services';
// import {  Routes,  Route } from 'react-router-dom'

import Landindpage from './Landindpage';
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme]= useState('light');
  useEffect(()=>{
       if(theme === 'dark'){
        document.documentElement.classList.add("dark");
       }
       else{
        document.documentElement.classList.remove("dark")
       }
  },[theme])

  const handleThemeChange =()=>{
    setTheme(theme === "light"? "dark" : "light")
  }
  return (
    <div>
      <Landindpage change ={handleThemeChange}/>
      {/* change ={handleThemeChange} */}
     
      {/* <Navbar />

        <Routes>

         <Route path ='/' element={<Home />}/>
         <Route path ='/aboutus' element={<Aboutus/>}/>
         <Route path ='/services' element={<Services />}/>
         <Route path ='/contactus' element={<Contactus />}/>
       </Routes>
      
      <Footer /> */}
    </div>

  );
}

export default App;
