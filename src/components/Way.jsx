import React from "react";
import OrbitAnimation from "./OrbitAnimation";
import Button from "./Button";

const waydata = [
  {
    id: 1,
    photo: `/images/excellence.png`,
    para: `2+ Years of`,
    name: `Excellence`,
  },
  {
    id: 2,
    photo: `/images/product.png`,
    para: `10+ Projects`,
    name: `Delivered`,
  },
  {
    id: 3,
    photo: `/images/tech.png`,
    para: `100+ Technology`,
    name: `Expert`,
  },
];

function Way() {
  return (
    <>
      <div className="container">
        <div className="way">
          <div className="w-left">
            <h2> Devhence Solutions Empowering Your Digital Journey</h2>

            <p>
              The Best App Development Company, Which is All About Your Needs
            </p>

            <p>
              Devhence Solutions is a leading web and mobile app development
              company based in India, delivering tailored digital solutions that
              align perfectly with your business goals.
            </p>

            <p>
              With a team of passionate, innovative, and skilled professionals,
              we turn ideas into powerful digital experiences. Our expertise
              spans across various domains, helping businesses optimize
              performance, enhance customer engagement, and drive growth.
            </p>

            <p>
              We believe in building long-term partnerships through trust,
              transparency, and a deep commitment to excellence. Our mission is
              to deliver exceptional value and memorable customer experiences —
              all at highly competitive costs.
            </p>

            <div className="way-data">
              {waydata.map((item) => (
                <div className="waybx">
                  <img src={item.photo} alt="item-image" />
                  <p>{item.para}</p>
                  <p>{item.name}</p>
                </div>
              ))}
            </div>

            <div className="btn">
              <Button title="Know More" />
            </div>
          </div>
          <div className="w-right">
            <OrbitAnimation />
          </div>
        </div>
      </div>
    </>
  );
}

export default Way;
