import React, { Fragment } from "react";
import "./ShortenURLCom.css";

const ShortenURLCom = () => {
  return (
    <Fragment>
      <div className="home-page-m-cont">
        <div className="home-cover-cont">
          <div className="home-page-child-cont">
            <div className="home-welcome">
              <div className="form-welcome-head">Shorten URLs and</div>

              <div className="form-welcome-head-2">earn money</div>
              <div className="form-welcome-input">
                <div className="form-input-cont">
                  <input type="text" placeholder="Your URLs Here" />
                </div>
                <div className="form-submit-button">
                  <button>Go</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ShortenURLCom;
