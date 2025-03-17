import React from 'react'
import Navbar from './components/Navbar'
// import Navhead from './components/Navhead'
import Footer from './components/Footer'


import Home from './components/pages/Home';
import Aboutus from './components/pages/Aboutus';
import Contactus from './components/pages/Contactus';
import Services from './components/pages/Services';
import {  Routes,  Route } from 'react-router-dom'
import Login from './components/pages/Login';
import BackToTop from './components/pages/BackToTop';

const Landindpage = ({change}) => {
  return (
    <div>
      {/* <Navhead  change ={change}/> */}
      <BackToTop />
      <Navbar change ={change}/>

        <Routes>

         <Route path ='/' element={<Home />}/>
         <Route path ='/aboutus' element={<Aboutus/>}/>
         <Route path ='/services' element={<Services />}/>
         <Route path ='/contactus' element={<Contactus />}/>
         <Route path ='/login' element={<Login />}/>
       </Routes>
      
      <Footer />
    </div>
  )
}

export default Landindpage
