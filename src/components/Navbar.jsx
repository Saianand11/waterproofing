import { useState } from "react";
import { navbarData } from "./NavbarData";
import { Link } from "react-router-dom";
import logo from './../assets/LOGO.svg'
import { IoMdMenu } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";

export default function Navbar({change}) {
  const [toggle, setToggle] = useState(false);

  const showNav = () => {
    setToggle(!toggle);
  };

  // start mobile first plus facile
  return (
    <div>
    <div>
    <a class=" object-center items-center flex flex-col text-center w-full sm:text-3xl text-2xl font-medium title-font bg-BgColor ">
               <img src={logo} fill="none" class="object-center items-center  w-36 h-40  text-white   " viewBox="0 0 0 0"></img>
        </a>
    </div>

    <nav className=" items-center top-38 w-full bg-slate-500 float-right flex p-4 z-10">
     
      <div className="flex justify-between items-center w-full flex-wrap md:flex-nowrap">
        {/* <h1 className="text-xl text-white font-bold cursor-pointer">Logo</h1> */}

        <button
          className="flex justify-end md:hidden ring-1 ring-black rounded"
          onClick={showNav} 
        >
          <i className="fas fa-bars text-white w-9 h-9 flex justify-center items-center hover:text-black"> <IoMdMenu/> </i>
        </button>
        <button type="button" class="text-white bg-blue-700 hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={change}>dark / light</button>


        <ul
          className={`${
            toggle ? " flex" : " hidden"
          } flex-col justify-center items-center w-full first:mt-2 md:flex-row md:w-auto md:space-x-10 md:flex`}
        >
          {navbarData.map((link, index) => {
            return (
              <li key={index} className={link.cname}>
                <Link
                  className="hover:text-white"
                  to={link.href}
                  onClick={showNav}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* <button
          className={`${
            toggle ? " flex" : " hidden"
          } text-indigo-800 hover:bg-gray-300 mx-auto md:mx-0 md:flex md:mt-0 items-center justify-center font-medium bg-gray-100 px-1 p-2 rounded-lg mt-4 w-24`}
        >
          Login
        </button> */}

      </div>
    </nav>
    </div>
  );
}






// import React, { useState } from 'react';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// import { Link } from 'react-router-dom'
// import logo from './../assets/LOGO.svg'

// const Navbar = ({change}) => {
//   // State to manage the navbar's visibility
//   const [nav, setNav] = useState(false);

//   // Toggle function to handle the navbar's display
//   const handleNav = () => {
//     setNav(!nav);
//   };

//   // Array containing navigation items
//   const navItems = [



    
//     { id: 1, text: 'Home' },
//     { id: 2, text: 'services' },
//     { id: 3, text: 'Resources' },
//     { id: 4, text: 'About' },
//     { id: 5, text: 'Contact' },
//   ];

//   return (

//     <div>
// <div>
// <a class=" object-center items-center flex flex-col text-center w-full sm:text-3xl text-2xl font-medium title-font ">
//            <img src={logo} fill="none" class="object-center items-center  w-36 h-40  text-white   " viewBox="0 0 0 0"></img>
//     </a>
// </div>


//     <div className='bg-black flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
     
//       {/* Logo */}
//       <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={change}>dark / light</button>

//       {/* Desktop Navigation */}
//       <ul className='hidden md:flex'>
//         {navItems.map(item => (
//           <li
//             key={item.id}
//             className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
//           >
//             {item.text}
//           </li>
//         ))}
//       </ul>

//       {/* Mobile Navigation Icon */}
//       <div onClick={handleNav} className='block md:hidden'>
//         {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//       </div>

//       {/* Mobile Navigation Menu */}
//       <ul
//         className={
//           nav
//             ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
//             : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
//         }
//       >
//         {/* Mobile Logo */}
//         <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>

//         {/* Mobile Navigation Items */}
//         {navItems.map(item => (
//           <li
//             key={item.id}
//             className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
//           >
//             {item.text}
//           </li>
//         ))}
//       </ul>
//     </div>
//     </div>
//   );
// };

// export default Navbar;



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom'
// import logo from './../assets/LOGO.svg'
// import { IoMdMenu } from "react-icons/io";
// import { TiThMenu } from "react-icons/ti";
// import { ImCross } from "react-icons/im";



// const Navbar = ({ change }) => {
//   const [Mobile, SetMobile] = useState(false)
//   return (


//     <div>


//       <nav class="bg-whitefixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
//         <a class=" object-center items-center flex flex-col text-center w-full sm:text-3xl text-2xl font-medium title-font ">
//           <img src={logo} fill="none" class="object-center items-center  w-36 h-40  text-white   " viewBox="0 0 10 0"></img>
//         </a>
//         <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4  dark:bg-gray-900  ">
          
//           <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//             <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">dark / light</button>
//             <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"></button>
//           </div>
//           <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" >
//             <ul   className={Mobile ?" flex flex-col  justify-center items-center gap-10 p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700" : "nav-links"}onClick={() => SetMobile(false)}>
             
             
             
//             {/* <ul className={Mobile ? "nav-links-mobile flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700" : "nav-links"}
//                 onClick={() => SetMobile(false)}

//               > */}
             
//               <Link to='/'>
//                 <li>
//                   <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
//                 </li>
//               </Link>
//               <Link to='/services'>
//                 <li>
//                   <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">serives</a>
//                 </li>
//               </Link>
//               <Link to='/aboutus'>
//                 <li>
//                   <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
//                 </li>
//               </Link>
//               <Link to='/contactus'>
//                 <li>
//                   <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact us </a>
//                 </li>
//               </Link>
//               <Link to='/login'>
//                 <li>
//                   <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</a>
//                 </li>
//               </Link>
//             </ul>
           
//           </div>
//         </div>
//       </nav>















//       {/* <nav class="bg-white border-gray-200">
//         <a class=" object-center items-center flex flex-col text-center w-full sm:text-3xl text-2xl font-medium title-font mb-4">
//           <img src={logo} fill="none" class="object-center items-center  w-36 h-40  text-white p-2  " viewBox="0 0 24 24"></img>
//         </a>
//         <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4  dark:bg-gray-900">
//           {/* <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
//         <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
//         <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
//     </a> *}

//           <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
//             <span class="sr-only">Open main menu</span>
//             <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
//             </svg>
//           </button>
//           <div class="hidden w-full md:block md:w-auto" id="navbar-default">
//             <button class="  bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base" onClick={change}>
//               dark/light
//             </button>


//             <ul className={Mobile ? "nav-links-mobile font-medium items-center justify-center flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700" : "nav-links"}
//                onClick={() => SetMobile(false)} >
//             {/* // </ul>

            
//             // <ul class="font-medium items-center justify-center flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"> *}
//               <Link to='/'>
//                 <li>
//                   <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
//                 </li>
//               </Link>
//               <Link to='/services'>
//                 <li>
//                   <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">serives</a>
//                 </li>
//               </Link>
//               <Link to='/aboutus'>
//                 <li>
//                   <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
//                 </li>
//               </Link>
//               <Link to='/contactus'>
//                 <li>
//                   <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact us </a>
//                 </li>
//               </Link>
//               <Link to='/login'>
//                 <li>
//                   <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</a>
//                 </li>
//               </Link>
//               <button className='mobile-menu-icon md:block lg:block' onClick={() => SetMobile(!Mobile)}>
//                   {Mobile ? <ImCross /> : <TiThMenu />}

//                 </button>

//             </ul>
//             <div class="float-end">

//             </div>

//           </div>
//         </div>
//       </nav> */}






//       {/* <div class="text-gray-600 body-font w-full bg-BgColor">

//         <div className='   '>

//           <nav className=' flex justify-between items-center '>
//             <div class=" object-center items-center flex flex-col text-center w-full ">
//               <a class="sm:text-3xl text-2xl font-medium title-font mb-4">
//                          <img src={logo} fill="none" class="object-center items-center  w-36 h-40  text-white p-2  " viewBox="0 0 24 24"></img>
//                        </a>
//               <span class="ml-3 text-xl"></span>

//             </div>
//             {/* <div className='lg:justify-between lg:items-center absolute min-h-[20vh] left-0 top-[25%] w-full flex items-center px-5'> *}
//             <div className='absolute items-center min-h-[5vh] left-0 top-[25%] w-full flex  px-5'>
//               <ul className="flex md:flex-rowitems-center md:gap-[3vw] gap-4" >
//                 <Link to='/'> <a class="mr-5 mb-2 hover:text-gray-900"><li>Home</li></a></Link>
//                 <Link to='/services'>  <a class="mr-5 mb-2 hover:text-gray-900"><li>Services</li></a></Link>
//                 <Link to='/aboutus'>  <a class="mr-5 mb-2 hover:text-gray-900"><li>Aboutus</li></a></Link>
//                 <Link to='/contactus'>  <a class="mr-5 mb-2 hover:text-gray-900"><li>Contact us</li></a></Link>
//                 <Link to='/login'>  <a class="mr-5 mb-2 hover:text-gray-900"><li>Login</li></a></Link>
//               </ul>
//               <div>
//                 <button class="float-right px-5 py-2 " onClick={change}>
//                   dark/light
//                 </button>
//               </div>
//             </div>




//           </nav>



//         </div>
//       </div> */}




















//       {/* <header class="text-gray-600 body-font w-full bg-BgColor">
//         <div class="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center  ">
//           <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

//             <img alt="" class="w-46 h-38 text-white p-2 md:hidden lg:hidden" viewBox="0 0 24 24" src={Logo} />

//             <span class="ml-3 text-xl"></span>
//           </a>

//           <div className=' flex justify-between items-center md:px-2 py-0 px-8 md:flex  '>




//             <nav class=" flex md:flex-row flex-col md:items-center  md:gap-2 ">
//               <ul className={Mobile ? "nav-links-mobile flex md:flex-row flex-col md:items-center  md:gap-2 ld:hidden" : "nav-links"}
//                 onClick={() => SetMobile(false)}

//               >
//                 <Link to='/'> <a class="mr-5 mb-2 hover:text-gray-900"><li>Home</li></a></Link>
//                 <Link to='/services'>  <a class="mr-5 mb-2 hover:text-gray-900"><li>Services</li></a></Link>
//                 <Link to='/aboutus'>  <a class="mr-5 mb-2 hover:text-gray-900"><li>Aboutus</li></a></Link>
//                 <Link to='/contactus'>  <a class="mr-5 mb-2 hover:text-gray-900"><li>Contact us</li></a></Link>
//                 <Link to='/login'>  <a class="mr-5 mb-2 hover:text-gray-900"><li>Login</li></a></Link>
//               </ul>
//               <div>
//                 <button className='mobile-menu-icon md:block lg:block' onClick={() => SetMobile(!Mobile)}>
//                   {Mobile ? <ImCross /> : <TiThMenu />}

//                 </button>
//               </div>
//             </nav>



//             {/* <div className='flex'>
//               <button className=' text-2xl h-4 w-4 md:float-right'>
              
//               </button>
//             </div> *}

//           </div>


//         </div>
//       </header> */}
//     </div>
//   )
// }

// export default Navbar
