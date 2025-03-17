import React from 'react'
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../Variants.js';
import Rdw from '../../assets/rdw.jpeg'

const Blog = () => {
  return (

    <section class="text-gray-600 body-font bg-BgColor ">
      <div class="container px-5 py-24 mx-auto text-TextColor">
        <div class="flex flex-wrap -m-4">
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            class="p-4 md:w-1/3">

            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              {/* <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={Rdw} alt="blog" /> */}
              <div class="p-6">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Residential <br></br>Waterproofing</h1>
                <p class="leading-relaxed mb-3">Residential Waterproofing in Chennai We are providing you with an innovative solution to all these problems.</p>

              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }} 
            class="p-4 md:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              {/* <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/721x401" alt="blog" /> */}
              <div class="p-6">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Commercial<br></br> Waterproofing</h1>
                <p class="leading-relaxed mb-3">Commercial Waterproofing in Chennai can provide you with the suitable solutions to all your needs whether straight forward</p>

              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }} 
            class="p-4 md:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              {/* <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/721x401" alt="blog" /> */}
              <div class="p-6 ">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 ">CATEGORY</h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3 ">Industrial Waterproofing</h1>
                <p class="leading-relaxed mb-3">Industrial Waterproofing in Chennai is a full service commercial roofing a waterproofing company in Chennai</p>

              </div>
            </div>
          </motion.div>
         
        </div>
      </div>

    </section >

  )
}

export default Blog
