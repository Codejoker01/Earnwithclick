import React, { Fragment } from 'react'
import Navbar from './navbar/Navbar'
 
import { Outlet } from 'react-router-dom'
import Footer from './Component/footer/Footer'
 
 

const App = () => {
  return (
    <Fragment>
      
       <Navbar/>
        
      <Outlet/>
      <Footer/>
    </Fragment>



  )
}

export default App
