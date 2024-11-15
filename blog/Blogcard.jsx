import React, { Fragment } from 'react'

const Blogcard = (props) => {
  return (
    <Fragment>
        <div className="blog-card-main-cont">
            <div className='blog-card-content-cont'> {props.content}</div>
            <div className='blog-card-username-cont'>{props.username}</div>
        </div>
      
    </Fragment>
  )
}

export default Blogcard
