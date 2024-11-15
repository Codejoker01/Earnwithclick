import React , { Fragment } from 'react'
import "./Count.css"
import { FaDollarSign } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

const Count = () => {
  return (
    <Fragment>
      <div className='count-main-cont'>
        <div className='count-parent-cont'>
          <div className='count-child-1-cont'>
            <div className='count-child-1-cont-1'>
                <div className='count-click-cont'>
                  <div className='count-child-1-cont-icon'
                  ><i><FaDollarSign /></i>
                  </div>
                  <div className='count-child-1-cont-head'>
                    Total Clicks
                  </div>
                  <div className='count-child-1-cont-number' >
                    56,789,235
                  
                  </div>
                  
                </div>
                <div className='count-url-cont'>
                  <div className='count-child-1-cont-icon'>
                    <i><FaLink /></i>
                  </div>
                  <div  className='count-child-1-cont-head'>
                    Total URLs
                  </div>
                  <div className='count-child-1-cont-number'>
                    133,334
                  </div>
                </div>
              
      
            </div>
            <div className='count-child-1-cont-2'>
              <div className='count-register-user-cont'>
                <div className='count-register-user-icon-cont'>
                  <i ><FaUsers /></i>
                </div>
                <div className='count-child-1-cont-2-head'>
                  Registered users
                </div>
                <div className='count-child-1-cont-number'>
                  1,231

                </div>
              </div>

            </div>

          </div>
          <div className='count-child-2-cont'>
              <div className='count-child-2-cont-head'>
                Numbers speak <br /> for 
                <br /> <span>themselves</span>
                </div>
                {/* <div className='count-child-2-cont-sub-head'>
                  Fast Growing
                </div> */}
          </div>

        </div>

      </div>
      
    </Fragment>
  )
}

export default Count
