import React, { Fragment , useState } from 'react'
import "./Register.css"
import { Link } from 'react-router-dom'

const Register = () => {
 
  return (
    <Fragment>
       <div className="Register-p-cont">
        <div className="Register-m-cont">
          <div className="Register-head-cont">
            Earnwith<span>Click</span>
          </div>
          <div className="s-input-cont">
            
            <div>
            <label htmlFor="#" className="s-input-label-wrap"> Name  </label> <br />
            <input
              type="text"
              placeholder="Enter your Name"
              className="Register-input-wrap"
              name='name'
               
            />
            </div>

            <div>
            <label htmlFor="#" className="s-input-label-wrap"> Mobile  </label> <br />
            <input
              type="number"
              placeholder="+91  |  Mobile Number*"
              className="Register-input-wrap"
              name='mobile'
               
            />
            </div>
            
            <div>
            <label htmlFor="#" className="s-input-label-wrap"> Email  </label> <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="Register-input-wrap"
              name='email'
               
            />
            </div>
            
          

            <div>
            <label htmlFor="#" className="s-input-label-wrap"> Password  </label> <br />
            <input
              type="password"
              placeholder="Xyz@123!"
              className="Register-input-wrap"
              name='password'
              
              
            />
            </div>
            

            <p className="s-terms-link-wrap">
              By continuing, I agree to the <Link to={"#"}>Terms of use</Link> &{" "}
              <Link to={"#"}>Privacy Policy</Link>
            </p>

            <button className="Register-b-wrap"  >Sign up</button>

            <div className='Register-back-cont'><Link to={"#"}> &#8592;  back</Link></div>

             
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Register
