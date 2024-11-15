import React, { Fragment } from "react";
import "./Contact.css";
import connectionimg from "../../assets/Images/Connection-Image-contact.png"

const Contact = () => {
  return (
    <Fragment>
      <div className="contact-main-cont">
        <div className="contact-main-heading-wrap">
          <h4>Contact Us</h4>
          <p>Let's Make it Happen?</p>
        </div>

        <div className="conatct-p-cont">
          <div className="form-main-cont">
            <label htmlFor="#" className="form-label-wrap">Your Name <span>*</span></label>
            <input type="text"  className="form-input-wrap" />

            <label htmlFor="#" className="form-label-wrap">Your Email <span>*</span></label>
            <input type="text" className="form-input-wrap" />

            <label htmlFor="#" className="form-label-wrap">Your Subject <span>*</span></label>
            <input type="text"  className="form-input-wrap"/>

            <label htmlFor="#" className="form-label-wrap">Your Message  <span>*</span></label>
             <textarea name="Message" id="link" className="textarea-wrap"></textarea>

              <div className="checkbox-cont">
              <input type="checkbox" />
              <span>I consent to having this website store my submitted information so they can respond to my inquiry</span>
              </div>
              
              <div className="send-button-cont">
              <button>Send  </button>
              </div>
            
          </div>
          <div className="contact-img-cont">
            <img src={connectionimg} alt={"no image found"} />
          </div>
        </div>
       
      </div>
    </Fragment>
  );
};

export default Contact;
