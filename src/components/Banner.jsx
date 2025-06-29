import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function Banner() {
  return (
    <>
      <section className="hero-sec">
        <div className="container">
          <div className="home-hero">
            <div className="hero-left">
              <h1>Innovating the Future Delivering Digital Excellence</h1>
              <p>
                <b>
                  At Devhence Solutions, we are driven by a passion for
                  innovation and excellence.
                </b>
                We craft impactful digital products and build standout brands
                that leave a lasting impression. Our mission is to transform
                ideas into powerful digital experiences through creativity,
                technology, and strategic thinking.
              </p>
              <br />
              <Button title="Contact us" />
            </div>
            <div className="hero-right">
              <img src="/images/d-banner.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
