import React from "react";
import Button from "./Button";

const keendata = [
  {
    id: 1,
    photo: `/images/keen1.png`,
    title: `Android App Development`,
    para: ` Devhence Solutions is a trusted Android app development company in Vadodara, delivering scalable and high-performance solutions across diverse industries. Our expertise ensures robust, user-friendly apps tailored to meet your business goals.`,
  },
  {
    id: 2,
    photo: `/images/keen2.png`,
    title: `Blockchain App Development`,
    para: `At Devhence Solutions, we bring deep expertise in blockchain technology, delivering secure, scalable, and future-ready blockchain app solutions. Recognized for our work both in Vadodara and globally, we help businesses harness the power of decentralization through cutting-edge blockchain development.`,
  },
  {
    id: 3,
    photo: `/images/keen3.png`,
    title: `Wearable App Development`,
    para: ` Devhence Solutions offers cutting-edge wearable app development services in Vadodara, designed to meet the demands of today’s fast-paced digital world. Our custom solutions combine innovation, performance, and user-centric design to deliver seamless experiences across a wide range of wearable devices`,
  },
  {
    id: 4,
    photo: `/images/keen4.png`,
    title: `Mobile Game App Development`,
    para: `At Devhence Solutions, we craft engaging and high-performance mobile games using the latest tools and next-gen technologies. From stunning graphics to immersive gameplay, our game development services are designed to captivate users and elevate the gaming experience across platforms.`,
  },
];

function Keen() {
  return (
    <>
      <div className="keen">
        <div className="container">
          <div className="keen-main">
            <div className="keen-left">
              <h2>Curious About What We Can Do for You?</h2>
              <p>
                We offer a wide range of mobile app development services in
                Bahrain, designed to help your business connect, grow, and
                thrive — anywhere and everywhere.
              </p>
              <div className="btn">
                <Button title="Know More" />
              </div>
            </div>
            <div className="keen-right">
              <div className="ker"></div>
              {keendata.map((item) => (
                <div className="keenbx">
                  <img src={item.photo} alt="" />
                  <h3>{item.title}</h3>
                  <p>{item.para}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Keen;
