import React, { Fragment } from 'react'
import "./Footer2.css"
import { Link } from 'react-router-dom'
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer2 = () => {
  return (
    <Fragment>
       <div className='f-bottom-cont'>
        <div className='f-child-bootom-cont'>
            <div>
                <Link to={"#"}>Privacy Policy</Link>
                <Link to={"#"}>Terms of Use</Link>
            </div>
            <div className='f-icon-cont'>
                <i><MdFacebook  /></i>
                <i ><AiFillTwitterCircle /></i>
            </div>
            <div className='copyright-wrap'>
                <p>Copyright © EarnwithClick 2024</p>
            </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Footer2
