import React, { Fragment, useEffect, useRef  } from 'react'
import "./Blog.css"
import Blogcard from './Blogcard'
import { MdHdrOffSelect } from 'react-icons/md';

const Blog = () => {

  const boxRef = useRef(null);

  useEffect(() => {
    const box = boxRef.current;
    const btnback = () => {
      let width = box.clientWidth;
      box.scrollLeft = box.scrollLeft - width;
       
    };
    const btnnext = () => {
      let width = box.clientWidth;
      box.scrollLeft = box.scrollLeft + width;
      
    };

    document.querySelector('.btn-back').addEventListener('click', btnback);
    document.querySelector('.btn-next').addEventListener('click', btnnext);

    
    // return () => {
    //   document.querySelector('.btn-back').removeEventListener('click', btnback);
    //   document.querySelector('.btn-next').removeEventListener('click', btnnext);
    // };
  }, []);
 


  return (
    <Fragment>
        <div className='Blog-main-cont'>
          <div>
          <button className="btn-back">&#129128;</button>
          <button className="btn-next">&#129130;</button>
          </div>
          <div className='blog-parent-cont' ref={boxRef}>
            <div className='blog-child-content'>
              <Blogcard
              content = "To be honest, I have never seen or found any better website than Shera links I feel like I get double paid for the same job in other websites."
              username = "Shirley Smith"
              />
            </div>
            <div className='blog-child-content'>
              <Blogcard
              content = " The good thing about Shera links is that fastest payments and highest Payout rate."
              username = "Jon Smith"
              />
            </div>
            <div className='blog-child-content'>
              <Blogcard
              content = "To be honest, I r website than Shera links I feel like I get double paid for the same job in other websites."
              username = "lavjeet Singh"
              />
            </div>
            <div className='blog-child-content'>
              <Blogcard
              content = " The good thing  is that fastest payments and highest Payout rate."
              username = "Rohan"
              />
            </div>
            <div className='blog-child-content'>
              <Blogcard
              content = "To be honest, I have never  etter website than Shera links I feel like I get double paid for the same job in other websites."
              username = " jazz"
              />
            </div>
            <div className='blog-child-content'>
              <Blogcard
              content = " The good thing about Shera  fastest payments and highest Payout rate."
              username = "abhi"
              />
            </div>

          </div>

        </div>
      
    </Fragment>
  )
}

export default Blog
