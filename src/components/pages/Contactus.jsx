import React from 'react'

const Contactus = () => {
  return (


    <div>
       <div class="flex flex-col text-center w-full mb-12 bg-BgColor ">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 bg-blue-950 text-white ">Contact us</h1>

        </div>
      <section class="text-gray-600 body-font relative bg-BgColor ">
       
        <div class="absolute inset-0 bg-gray-300 bg-BgColor">
          <iframe frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://www.google.com/maps/d/embed?mid=1Wt13xCMo-IfiiqxXUr6FZeMbi1_JoC0&ehbc=2E312F&noprof=1" width="100%" height="100%"></iframe>

        </div>
        <div class="container px-5 py-24 mx-auto flex bg-BgColor ">
          <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md bg-BgColor">
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
            {/* <p class="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p> */}
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">Name</label>
              <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">Phone number</label>
              <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
              <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <form class=" relative mb-4">
              <label for="countries" class="block mb-2 text-sm font-medium  text-gray-600 ">Select the Location</label>
              <select id="countries" class="text-gray-600 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray  dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Select the area</option>
                <option value="HY">Hyberadad</option>
                <option value="RJY">Rajahmundry</option>
                <option value="KKD">Kakinada</option>
                <option value="EL">ELEURU</option>
                <option value="BZA">Vijayawada</option>

              </select>
            </form>
            <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
            {/* <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p> */}
          </div>
        </div>
      </section>
    </div>




  )
}

export default Contactus
