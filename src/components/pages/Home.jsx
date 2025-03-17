import React from 'react'
import Hero from '../sections/Hero'
import Blog from '../sections/Blog'
import No from '../sections/No'
import Ourserives from '../sections/Ourserives'
import Statiticks from '../sections/Statiticks'
import Callback from'../sections/Callback'
//  import Feedback from '../sections/Feedback'


const Home = () => {
  return (
    <div>
     <Hero />
     <Blog />
     <No />
     <Ourserives />
     <Statiticks />
     <Callback />
      {/* <Feedback />  */}
     
    </div>
  )
}

export default Home
