import React from 'react'
import Bw from '../../assets/Bw.jpg'
import Tw from '../../assets/Tw.jpg'
import Baw from '../../assets/Baw.jpg'
import Wtw from '../../assets/WTW.jpg'
import Bat from '../../assets/BATW.jpg'
import Suw from '../../assets/SW.jpg'
import Bal from '../../assets/BALW.jpg'
import CW from '../../assets/CW.jpg'
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../Variants.js';

const Services = () => {
  return (
    <div>

      <section class="text-gray-600 body-font bg-BgColor ">
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="sm:text-3xl text-2xl font-medium title-font   bg-blue-950 text-white">Services</h1>

        </div>

        <section class="text-gray-600 body-font bg-BgColor ">
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }} >


            <div class="container px-5 py-24 mx-auto text-TextColor">
              <div class="flex flex-wrap -m-4">


                <div class="lg:w-1/4 md:w-1/2 p-4 w-full duration-300 ease-in-out">
                  <motion.div
                    variants={fadeIn("left", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}


                    whileHover={{
                      scale: [null, 0.5, 1],
                      transition: {
                        duration: 0.5,
                        times: [0, 0.6, 1],
                        ease: ["easeInOut", "easeOut"],
                      },
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                    }} >
                    <a class="block relative h-48 rounded overflow-hidden duration-300 ease-in-out">
                      <img alt="ecommerce" class="object-cover object-center w-full h-full block duration-300 ease-in-out" src={Bw} />
                    </a>
                  </motion.div>
                  <div class="mt-4">
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                    <h1 class="text-gray-900 title-font text-lg font-medium">Building Waterproofing</h1>
                    <p class="mt-1">New constructed or old building waterproofing in Chennai...</p>
                  </div>

                </div>



                <div class="lg:w-1/4 md:w-1/2 p-4 w-full duration-300 ease-in-out">
                  <motion.div
                    variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}

                    whileHover={{
                      scale: [null, 0.5, 1],
                      transition: {
                        duration: 0.5,
                        times: [0, 0.6, 1],
                        ease: ["easeInOut", "easeOut"],
                      },
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                    }} >
                    <a class="block relative h-48 rounded overflow-hidden">
                      <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={Tw} />
                    </a>
                  </motion.div>
                  <div class="mt-4">
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                    <h2 class="text-gray-900 title-font text-lg font-medium">Terrace Waterproofing</h2>
                    <p class="mt-1">Terrace waterproofing should be able to resist leakage during heavy rainfall...</p>
                  </div>
                </div>



                <div class="lg:w-1/4 md:w-1/2 p-4 w-full ease-in-out">
                  <motion.div
                    variants={fadeIn("down", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}

                    whileHover={{
                      scale: [null, 0.5, 1],
                      transition: {
                        duration: 0.5,
                        times: [0, 0.6, 1],
                        ease: ["easeInOut", "easeOut"],
                      },
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                    }} >
                    <a class="block relative h-48 rounded overflow-hidden">
                      <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={Baw} />
                    </a>
                  </motion.div>
                  <div class="mt-4">
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                    <h2 class="text-gray-900 title-font text-lg font-medium">Basement Waterproofing</h2>
                    <p class="mt-1">Waterproofing a basement that is below ground level can require the application...</p>
                  </div>
                </div>



                <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <motion.div
                    variants={fadeIn("right", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}

                    whileHover={{
                      scale: [null, 0.5, 1],
                      transition: {
                        duration: 0.5,
                        times: [0, 0.6, 1],
                        ease: ["easeInOut", "easeOut"],
                      },
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                    }} >
                    <a class="block relative h-48 rounded overflow-hidden">
                      <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={Wtw} />
                    </a>
                  </motion.div>
                  <div class="mt-4">
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                    <h2 class="text-gray-900 title-font text-lg font-medium">Water Tank Waterproofing</h2>
                    <p class="mt-1">The average lifespan of a concrete water tank is 10 to 15 years, during which the internal...</p>
                  </div>
                </div>



                <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <motion.div
                    variants={fadeIn("left", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}

                    whileHover={{
                      scale: [null, 0.5, 1],
                      transition: {
                        duration: 0.5,
                        times: [0, 0.6, 1],
                        ease: ["easeInOut", "easeOut"],
                      },
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                    }} >
                    <a class="block relative h-48 rounded overflow-hidden">
                      <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={Bat} />
                    </a>
                  </motion.div>
                  <div class="mt-4">
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                    <h2 class="text-gray-900 title-font text-lg font-medium">Bathroom Waterproofing</h2>
                    <p class="mt-1">Bathroom waterproofin in Chennai the expert in treating your bath room leakages...</p>
                  </div>
                </div>



                <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <motion.div
                    variants={fadeIn("down", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}

                    whileHover={{
                      scale: [null, 0.5, 1],
                      transition: {
                        duration: 0.5,
                        times: [0, 0.6, 1],
                        ease: ["easeInOut", "easeOut"],
                      },
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                    }} >
                    <a class="block relative h-48 rounded overflow-hidden">
                      <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={Suw} />
                    </a>
                  </motion.div>
                  <div class="mt-4">
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                    <h2 class="text-gray-900 title-font text-lg font-medium">Sump Waterproofing</h2>
                    <p class="mt-1">Sump waterproofing in Chennai is a water base epoxy chemical coating treatment...</p>
                  </div>
                </div>


                <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <motion.div
                    variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}

                    whileHover={{
                      scale: [null, 0.5, 1],
                      transition: {
                        duration: 0.5,
                        times: [0, 0.6, 1],
                        ease: ["easeInOut", "easeOut"],
                      },
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                    }} >
                    <a class="block relative h-48 rounded overflow-hidden">
                      <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={Bal} />
                    </a>
                  </motion.div>
                  <div class="mt-4">
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                    <h2 class="text-gray-900 title-font text-lg font-medium">Balcony Waterproofing</h2>
                    <p class="mt-1">Balcony Leakage Waterproofing in Chennai we will cure with crylic polymer cement...</p>
                  </div>
                </div>


                <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <motion.div
                    variants={fadeIn("right", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}

                    whileHover={{
                      scale: [null, 0.5, 1],
                      transition: {
                        duration: 0.5,
                        times: [0, 0.6, 1],
                        ease: ["easeInOut", "easeOut"],
                      },
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                    }} >
                    <a class="block relative h-48 rounded overflow-hidden">
                      <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={CW} />
                    </a>
                  </motion.div>
                  <div class="mt-4">
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                    <h2 class="text-gray-900 title-font text-lg font-medium">Crack Waterproofing</h2>
                    <p class="mt-1">Wall Crack Waterproofing Chennai. Injection grouting is a process of filling the cracks...</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section >
      </section>
    </div>
  )
}

export default Services
