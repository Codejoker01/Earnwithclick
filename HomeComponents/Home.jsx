import React, { Fragment } from 'react'
import ShortenURLCom from '../Component/Shorten URLs/ShortenURLCom'
 
import Tilt from "../Component/HowToStartComp/Tilt"
 
import Joinpage from "../Component/joinpage/Joinpage"
import Contact from '../Component/contact/Contact'
 
import Count from '../counting details/Count'
 
 
 
 

const Home = () => {
  return (
    <Fragment>
      <ShortenURLCom/>
     
      <Tilt/>
     
       <Joinpage/>
       <Count/>
      <Contact/>
       
     
    </Fragment>
  )
}

export default Home
