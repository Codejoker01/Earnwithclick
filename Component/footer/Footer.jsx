import React, { Fragment } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import paypalimg from "../../assets/Images/paypal.png";
import webmoneyimg from "../../assets/Images/webmoney.png";
import { MdAddIcCall } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Footer2 from "../footer-2/Footer2";

const Footer = () => {
  return (
    <Fragment>
      <div className="footer-main-cont">
        <div className="footer-child-cont">
          <div className="footer-child-1-cont">
            <div className="footer-child-1-head-wrap">EARNWITHCLICK</div>

            <div className="footer-child-1-content-wrap">
              Earnwith Click is a completely free tool where you can create
              short links, which apart from being free, you get paid! So, now
              you can make money from home, when managing and protecting your
              links.
            </div>
            <div className="footer-child-1-icon-wrap"></div>
          </div>
          <div className="footer-child-2-cont">
            <div className="footer-child-2-head-wrap">Explore</div>

            <div className="footer-child-2-link-wrap">
              <Link to={"#"}>About</Link>
            </div>
            <div className="footer-child-2-link-wrap">
              <Link to={"#"}>Our Team</Link>
            </div>
            <div className="footer-child-2-link-wrap">
              <Link to={"#"}>Contact</Link>
            </div>
            <div className="footer-child-2-link-wrap">
              <Link to={"#"}>Services</Link>
            </div>
          </div>
          <div className="footer-child-3-cont">
            <div className="footer-child-3-head-wrap">Contact</div>
            <div className="footer-child-3-content">
              <div className="footer-child-3-icon-wrap">
                <MdAddIcCall />
              </div>

              <div className="footer-child-3-contact-wrap">8965342167</div>
            </div>
            <div className="footer-child-3-content">
              <div className="footer-child-3-icon-wrap">
                <MdOutlineEmail />
              </div>

              <div className="footer-child-3-contact-wrap">
                Support@xyzgmail.com
              </div>
            </div>
            <div className="footer-child-3-content">
              <div className="footer-child-3-icon-wrap">
                <FaLocationDot />
              </div>

              <div className="footer-child-3-contact-wrap">US</div>
            </div>
          </div>
          <div className="footer-child-4-cont">
            <div>
              {" "}
              <img src={paypalimg} alt="" />
            </div>
            <div>
              {" "}
              <img src={webmoneyimg} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer2/>
    </Fragment>
  );
};

export default Footer;
