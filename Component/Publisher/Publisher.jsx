import React , { Fragment } from 'react'
import "./Publisher.css"
import ukimg from "../../assets/Icon/uk-logo.svg"
import usimg from "../../assets/Icon/us-logo.svg"
import canadaimg from "../../assets/Icon/canada-logo.svg"
import deskimg from "../../assets/Icon/publisher-page-des-img-1.png"
import mobimg from "../../assets/Icon/publisher-page-mob-img-1.png"

const Publisher = () => {
  return (
    <Fragment>
        <div className='Publisher-main-cont'>
           
         <div className='main-heading-cont'>
            <p >Publisher Rates</p>
            <h1>We offer the best</h1>
             
            </div>
        <div className='main-row-cont'>
         
            <div className='column-1-cont'>
            Package Description / Country
            </div>
            <div className='column-2-cont'>
                

                <div className='col-2-row-2-cont'>

                    <div className='icon-cont'>
                        <div>
                            <img src={deskimg} alt="" />
                        </div>
                        <div>
                        <h4>DesKtop</h4>
                        <p>Earnings per 1000 Views</p>
                        </div>

                    </div>
                    <div className='icon-cont'>
                        <div>
                            <img src={mobimg}alt="" />
                        </div>
                        <div>
                        <h4>Mobile / Tablet</h4>
                        <p>Earnings per 1000 Views</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='list-main-cont'>

        
        <div>

            <div className='list-1-main-cont'>
               <div className='country-name-1-cont'>
                  <img src={ukimg} alt="" />
                  <span>United Kingdom</span>
               </div>
               <div className=' price-list-1-cont'>
                     <div>$2.000000</div>
                     <div>$2.000000</div>
               </div>
            </div>
        </div>
        <div>

            <div className='list-2-main-cont'>
               <div className='country-name-2-cont'>
                  <img src={usimg} alt="" />
                  <span>United States</span>
               </div>
               <div className=' price-list-2-cont'>
                     <div>$2.000000</div>
                     <div>$2.000000</div>
               </div>
            </div>
        </div>
        <div>

            <div className='list-3-main-cont'>
               <div className='country-name-3-cont'>
                  <img src={canadaimg} alt="" />
                  <span> Canada</span>
               </div>
               <div className=' price-list-3-cont'>
                     <div>$1.600000</div>
                     <div>$1.600000</div>
               </div>
            </div>
        </div>
        <div>

            <div className='list-4-main-cont'>
               <div className='country-name-4-cont'>
                   
                  <p> Worldwide Deal(All Countries)</p>
               </div>
               <div className=' price-list-4-cont'>
                     <div>$0.400000</div>
                     <div>$0.400000</div>
               </div>
            </div>
        </div>
        </div>
        </div>
        
      
    </Fragment>
  )
}

export default Publisher
