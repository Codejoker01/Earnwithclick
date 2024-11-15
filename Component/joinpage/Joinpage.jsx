import React from 'react'
import { Fragment } from 'react'
import Login from './Login'
import img1 from "../../assets/Icon/join-page-img-1.svg"
import img2 from "../../assets/Icon/join-page-img-2.svg"
import img3 from "../../assets/Icon/join-page-img-3.svg"
import img4 from "../../assets/Icon/join-page-img-4.svg"
import img5 from "../../assets/Icon/join-page-img-5.svg"
import img6 from "../../assets/Icon/join-page-img-6.svg"
import img7 from "../../assets/Icon/join-page-img-7.svg"
import img8 from "../../assets/Icon/join-page-img-8.svg"
import img9 from "../../assets/Icon/join-page-img-9.svg"
 


const Joinpage = () => {
  return (
    <Fragment>
      <div className='join-page-main-cont'>
      <div className='join-main-heading'>Earn extra money</div>
      <div className='join-main-sub-heading'>Why join us?</div>

        <div className='join-parent-cont'>
         
         
       

          <div className='join-child-cont'>
          <Login
          joinimg = {img1}
          joinheading = "What is EarnwithClick?"
          joincontent = "EarnwithClick is a completely free tool where you can create short links, which apart from being free, you get paid! So, now you can make money from home, when managing and protecting your links."
          />
          </div>
          <div className='join-child-cont'> 
          <Login
          joinimg = {img2}
          joinheading = "How and how much do I earn?"
          joincontent = "How can you start making money with EarnwithClick? It's just 3 steps: create an account, create a link and post it - for every visit, you earn money. It's just that easy!"
          />
          </div>
          <div className='join-child-cont'> 
          <Login
          joinimg = {img3}
          joinheading = "20% Referral Bonus"
          joincontent = "The EarnwithClick referral program is a great way to spread the word of this great service and to earn even more money with your short links! Refer friends and receive 20% of their earnings for life!"
          />
          </div>
          <div className='join-child-cont'> 
          <Login
          joinimg = {img4}
          joinheading = "Featured Administration Panel"
          joincontent = "Control all of the features from the administration panel with a click of a button."
          />
          </div>
          <div className='join-child-cont'> 
          <Login
          joinimg = {img5}
          joinheading = "Detailed Stats"
          joincontent = "Know your audience. Analyse in detail what brings you the most income and what strategies you should adapt."
          />
          </div>
          <div className='join-child-cont'> 
          <Login
          joinimg = {img6}
          joinheading = "Low Minimum Payout"
          joincontent = "You are required to earn only $5.000000 before you will be paid. We can pay all users via their PayPal."
          />
          </div>
          <div className='join-child-cont'> 
          <Login
          joinimg = {img7}
          joinheading = "Highest Rates"
          joincontent = "Make the most out of your traffic with our always increasing rates."
          />
          </div>
          <div className='join-child-cont'> 
          <Login
          joinimg = {img8}
          joinheading = "API"
          joincontent = "Shorten links more quickly with easy to use API and bring your creative and advanced ideas to life."
          />
          </div>
          <div className='join-child-cont'> 
          <Login
          joinimg = {img9}
          joinheading = "Support"
          joincontent = "A dedicated support team is ready to help with any questions you may have."
          />
          </div>
           </div>
      </div>
    </Fragment>
  )
}

export default Joinpage
