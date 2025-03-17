import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const Statiticks = () => {

    // eslint-disable-next-line no-restricted-globals
    const [counterState, setCounterState] = useState(false)

    return (
        // eslint-disable-next-line no-restricted-globals
        <div>

            <section class="text-gray-600 body-font bg-BgColor ">

                <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
                    {/* // eslint-disable-next-line no-restricted-globals */}
                    <div class="container px-5 py-24 mx-auto text-TextColor">

                        <div class="flex flex-wrap -m-4 text-center">
                            <div class="p-3 sm:w-1/4 w-1/2">
                                <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                                    {counterState &&
                                        <CountUp
                                            start={0}
                                            end={110}
                                            duration={2.95}>
                                        </CountUp>
                                    }
                                    
                                </h2>
                                <p class="leading-relaxed">Projects Finished</p>
                            </div>
                            <div class="p-3 sm:w-1/4 w-1/2">
                                <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                                    {counterState &&
                                        <CountUp
                                            start={0}
                                            end={30}
                                            duration={2.95}>
                                        </CountUp>
                                    }
                                </h2>
                                <p class="leading-relaxed">Our Team</p>
                            </div>
                            <div class="p-3 sm:w-1/4 w-1/2">
                                <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                                    {counterState &&
                                        <CountUp
                                            start={0}
                                            end={200}
                                            duration={2.95}>
                                        </CountUp>
                                    }
                                </h2>
                                <p class="leading-relaxed">Satisfied Clients</p>
                            </div>
                            <div class="p-3 sm:w-1/4 w-1/2">
                                <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                                    {counterState &&
                                        <CountUp
                                            start={0}
                                            end={24}
                                            duration={2.95}>
                                        </CountUp>
                                    }
                                </h2>
                                <p class="leading-relaxed">Hours Of Work</p>
                            </div>
                        </div>
                    </div>
                </ScrollTrigger>


            </section>
        </div>
    )
}

export default Statiticks
