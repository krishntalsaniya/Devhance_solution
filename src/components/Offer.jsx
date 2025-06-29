import React from "react";
import { Link } from "react-router-dom";

const offer = [
  // {
  //     id:1,
  //     photo: `/images/offer1.png`,
  //     title:`Mobile App Development`,
  //     para:`Powered by your imagination and chain of ideas, we shape the outcome with our team of mobile app developers`,
  //     link:`Learn More`,
  //     path:`/`
  // },
  {
    id: 2,
    photo: `/images/offer2.png`,
    title: `Web App Development`,
    para: `We are a top-rated Web Application Development Company. Kickstart your customized and engaging Web app with our development services.`,
    link: `Learn More`,
    path: `/Webdevelopment`,
  },
  // {
  //     id:3,
  //     photo: `/images/offer3.png`,
  //     title:`Game App Development`,
  //     para:`Create, launch and operate your app with us as we are the leader of mobile game development companies in India USA, and UAE`,
  //     link:`Learn More`,
  //     path:`/`
  // },
  {
    id: 4,
    photo: `/images/offer4.png`,
    title: `Enterprise Solutions`,
    para: `We augment and deliver dynamic enterprise solutions to our partners that provides key analysis most constructively.`,
    link: `Learn More`,
    path: `/Enterprise`,
  },
  {
    id: 5,
    photo: `/images/offer5.png`,
    title: `Wearable App Development`,
    para: `We are widely known as a leading wearable app development company with a team of mobile app developers who deliver robust apps.`,
    link: `Learn More`,
    path: `/wearable`,
  },
  {
    id: 6,
    photo: `/images/offer6.png`,
    title: `Iphone App Development`,
    para: `We know what it takes to develop a flawless iPhone app as we have successfully crafted 100+ iPhone apps for our clients across the globe.`,
    link: `Learn More`,
    path: `/Iphone`,
  },
  {
    id: 7,
    photo: `/images/offer7.png`,
    title: `Android App Development`,
    para: `Android is the market leader of the OS domain, and we dominate skillfully in it. Our full-stack Android developers work with the latest technology and tools.`,
    link: `Learn More`,
    path: `/Android`,
  },
  {
    id: 8,
    photo: `/images/offer8.png`,
    title: `Cross-platform Mobile App`,
    para: `Cross-platform app development for both Android and iOS is our forte, which is closely complemented with frameworks like Xamarin, and React Native.`,
    link: `Learn More`,
    path: `/hybrid-app`,
  },
];

function Offer() {
  return (
    <>
      <div className="offer">
        <div className="container">
          <h2>Smart, Scalable Digital Solutions We Deliver</h2>

          <div className="offer-parent">
            {offer.map((item) => (
              <Link
                className="card"
                to={item.path}
                style={{ textDecoration: "none" }}
              >
                <div>
                  <div className="card-border-top"></div>
                  <div className="img">
                    <img src={item.photo} alt="" />
                  </div>
                  <span>{item.title}</span>
                  <p className="job"> {item.para}</p>
                  <button> {item.link} </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Offer;
