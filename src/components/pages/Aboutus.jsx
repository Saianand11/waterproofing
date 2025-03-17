import React from 'react'

const Aboutus = () => {
   return (

      <div class="flex flex-col text-left w-full mb-12 bg-BgColor text-TextColor  ">
         <h1 class=" italic font-serif  bg-blue-950 sm:text-3xl text-2xl font-medium title-font mb-6 text-white ml-5"><ul>About  us :</ul></h1>


         <div id="about-section" class="pt-5 pt-xs-60 bg-BgColor">

            <div class="container bg-BgColor">
               <div class="row bg-BgColor">
                  <div class="col-sm-6 col-md-8 bg-BgColor">
                     <div class="block-title ml-6  v-line">
                        <h2 class="italic font-serif sm:text-2xl text-1xl bg-yellow-200 "><span>DR.FIXIT</span> Waterproofing Solutions</h2>
                        {/* <h2 class="italic text-left  ml-2"> Complete Solution </h2> */}
                     </div>
                     <div class=" italic font-serif text-content mt-6 ml-6 bg-BgColor">
                        <p>We have great pleasure to introducing ourselves as one of the reputed and registered leading specialists Agency in waterproofing treatment to structures, particularly in cement based integral waterproofing we have been in this field for the past eight years, <b>DR.FIXIT Waterproofing Solutions</b> was established in 2009 . <br>
                        </br>We have high technically qualified Engineers, Experienced and dedicated technicians to carry out the treatment, Our treatment for each system is detailed in the specification as and when it is required by you can be handed over to your good self. Sketch enclosed herewith.  In each case, we use quality based chemical for application to yield good result by all means which confirms worthy and has been widely accepted by our clients both state Government and private sectors. <br></br>For your information, we are enclosing herewith a list of works carried out by us.</p>
                     </div>
                    
                  </div>
                  <div class="col-sm-6 col-md-4 mt-10 bg-BgColor">
                     <div class=" padding-40">
                        <div class="block-title ml-4">
                           <h2 class="italic font-serif sm:text-2xl text-1xl bg-blue-950 text-white "><span>Our</span> SPECIAL    :</h2>
                           <h2 class="italic ml-5 mt-3 underline underline-offset-1"> The Waterproofing Specialist</h2>
                        </div>
                        <p class="ml-6 mt-2 italic font-serif"><b>Dr.Fixit Waterproofing Solutions</b> personally explains to each customer the various processes, providing numerous choices and reasonable rates. They will insist upon the quality and expect complete satisfaction with the customers. They take care of every customer as they would wish to be taken care of themselves. They take a personal interest in customers waterproofing problems. They pride themselves on staying abreast of the latest new application techniques and materials so that they can offer the best possible service to their customers.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Aboutus
