import React, { Fragment } from 'react'
import Card from "./Card";
import card1img from "../../assets/Images/new-card-img-1-removebg-preview.png"
import card2img from "../../assets/Images/shorten-img-1.png"
import card3img from "../../assets/Images/new-card-img-2-removebg-preview.png"

 

const Tilt = () => {
  return (
    <Fragment>
        
      <div className=' step-card-main-cont'>
        <div className='step-main-head-cont'>It's just three steps</div>
        <div className='step-main-sub-head-cont'>How You Start?</div>

        <div className='start-parent-cont'>
           
   
        <div className='start-child-cont'>
        <Card
         img = {card1img}
         step = "01"
         head = "CREATE AN  ACCOUNT"
         content = "In order to get started with EarnwithClick, at first all you need is Shera links Account & you can create it by sign-up option."
         class= "step-1-card"
         buttonclass = "step-1-button"
        />

        </div>

        <div className='start-child-cont'>
        <Card
         img = {card2img}
         step = "02"
         head = "SHORTEN YOUR LINKS & SHARE"
         content = "Shorten that links with EarnwithClick & copy them and start sharing on any platform e.g: YouTube, Telegram, Website etc."
         class= "step-2-card"
         buttonclass = "step-2-button"
        />
        </div>

        <div className='start-child-cont'>
        <Card
         img = {card3img}
         step = "03"
         head = "EARN MONEY  "
         content = "Here you Go, since you've shared your Shorten links and got views on it, So that you're getting paid for every view you get.check our CPM rates at Publisher Rates."
         class= "step-3-card"
         buttonclass = "step-3-button"
         card3head = "step-card-3-wrap-f-m"
        />
        </div>

         
        </div>  
        </div>
        
     
    </Fragment>
  )
  
}



export default Tilt
