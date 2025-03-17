import React from 'react'
import logo from './../assets/LOGO.svg'
import Navbar from './Navbar'

const Navhead = ({ change }) => {
  return (
    <header class="text-gray-600   body-font bg-BgColor">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto sm:h-32">

        </nav> */}

        <div class=" object-center items-center flex flex-col text-center w-full ">
          <a class=" sm:block   md:block hidden sm:text-3xl text-2xl font-medium title-font mb-4">
            <img src={logo} fill="none" class="object-center items-center  w-36 h-40  text-white p-2  " viewBox="0 0 24 24"></img>
          </a>
          <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0 ">
            <div>
              <Navbar />

            </div>


            {/* <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
              onClick={change}
            >light / dark
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button> */}
          </div>
          {/* <a class=" sm:block   md:block hidden sm:text-3xl text-2xl font-medium title-font mb-4">
            <img src={logo} fill="none" class="object-center items-center  w-36 h-40  text-white p-2  " viewBox="0 0 24 24"></img>
          </a> */}




        </div>
        {/* <div class='flex object-center'>
          <a class="   text-center items-center sm:block   md:block hidden  ml-10 " >
            <img src={logo} fill="none" class=" object-center w-36 h-40 text-white p-2  " viewBox="0 0 24 24">
            </img>

          </a>
        </div> */}

        {/* <a class= "flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-1 md:mb-0 bg-BgColor" >
      <img src={LOGO} fill="none"  class="w-30 h-26 text-white p-2 " viewBox="0 0 24 24">
      </img>
      <span class="ml-3 text-xl">Tailblocks</span> /}
    </a> */}


      </div>
    </header>
  )
}

export default Navhead
