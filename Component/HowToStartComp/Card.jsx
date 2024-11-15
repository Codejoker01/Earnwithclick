import React , { Fragment }  from 'react'
import "./Card.css"


const Card = (props) => {
  return (
    <Fragment>
       
        <div className={`step-1-card-cont ${props.class} `}>
          <div className='card-1-cont'>
          <div className='step-1-img-cont'><img src={props.img} alt="" /></div>
          
          <div className='step-cont'>{props.step}</div>
          </div>
          <div className={`card-1-head-cont ${props.card3head}`}>{props.head}</div>
          <div className='card-1-content'> {props.content}</div>

          <div className='card-1-button-cont'>
            <button className={props.buttonclass}>	<div className='button-rotated-icon' >&#8594;</div></button>
          </div>

        </div>



         


        
        
  
      
    </Fragment>
  )
}

export default Card
