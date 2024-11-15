import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"

const Login = () => {
  return (
    <Fragment>
        <div className="login-p-cont">
        <div className="Login-m-cont">
          <div className="Login-main-head-cont">
             Earnwith<span>Click</span>
          </div>
          <div className="l-input-cont">
            <p className="login-h-cont"> Welcome back!  </p>
            <p className='login-sub-h-cont'>Happy to see you again!</p>
            <div>
            <label htmlFor="#" className="input-label-wrap"> Email  </label> <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="login-input-wrap"
              name="email"
              
              
            />
            </div>
            
            <div>
            <label htmlFor="#" className="input-label-wrap"> Mobile  </label> <br />
            <input
              type="number"
              placeholder="+91  |  Mobile Number*"
              className="login-input-wrap"
              name="mobile"
               
            />
            </div>

            <div>
            <label htmlFor="#" className="input-label-wrap"> Password  </label> <br />
            <input
              type="password"
              placeholder="Xyz@123!"
              className="login-input-wrap"
              name="password"
               
            />
            </div>
            
 

            <button className="login-b-wrap"  >CONTINUE</button>

            <p className="help-link-wrap">
              Have trouble logging in? <Link>Get help</Link>
            </p>
          </div>
        </div>
      </div>
      
    </Fragment>
  )
}

export default Login
