import React from 'react'
import Logo1 from './../../assets/LOGO1.png'


const Hero = () => {
    return (



        <section class="text-gray-600 body-font bg-BgColor ">
            <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center ">
                <div class="  lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16  md:mb-0 items-center text-center">
                    <h1 class="title-font sm:text-3xl text-3xl mb-4 mt-36 font-medium text-TextColor italic ">Welcome to
                        <br></br> <h1 class="text-TextColor sm:text-3xl  text-2xl  "> Dr. fixit Waterproofing Solutions </h1>
                    </h1>
                    
                </div>
                
                <div class=" sm:block hidden  md:block lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mr-24  mb-4">
                    <img class=" flex object-cover object-center round  " alt="hero" src={Logo1} />
                </div>

            </div>
        </section>
        // <section class="text-gray-600 body-font bg-BgColor">
        //     <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">

        //         <img class="object-cover object-center rounded" />
        //         <div class="bg-fixed ..." bg="background-image: url(...)">
        //             <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        //                 <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to
        //                     <br></br> <h1 class=" flex  "> Dr. fixit Waterproofing Solutions </h1>
        //                 </h1>
        //                 {/* <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p> */}

        //             </div>
        //             <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        //                 <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
        //             </div>
        //         </div>
        //     </div>


        // </section>
    )
}

export default Hero
