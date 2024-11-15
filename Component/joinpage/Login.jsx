import React, { Fragment } from 'react'
import "./Login.css"

const Login = (props) => {
  return (
    <Fragment>
        <div className='join-card-main-cont'>
          <div className='join-img-wrap'><img src={props.joinimg} alt="" /></div>
          <div className='join-head-warp'>{props.joinheading}</div>
          <div className='join-content-wrap'>{props.joincontent}</div>

        </div>
      
    </Fragment>
  )
}

export default Login
