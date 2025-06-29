import React from "react";

const industries = [
  { icon: "/images/wrk1.webp", label: "Real Estate" },
  { icon: "/images/wrk2.webp", label: "Education" },
  { icon: "/images/wrk3.webp", label: "Ecommerce" },
  { icon: "/images/wrk4.webp", label: "Game" },
  { icon: "/images/wrk5.webp", label: "Healthcare" },
  { icon: "/images/wrk6.webp", label: "On-Demand" },
  { icon: "/images/wrk7.webp", label: "Grocery" },
  { icon: "/images/wrk8.webp", label: "Fitness Center" },
];

const Industries = () => {
  return (
    <section className="industries-section">
      <div className="container">
        <h2 className="title">Our Industry Expertise</h2>
        <div className="subtitle">
          Smart Solutions for Every Business Landscape
        </div>
        <div className="industries-grid">
          {industries.map((item, index) => (
            <div className="industry-item" key={index}>
              <div>
                <img src={item.icon} alt={item.label} />
                <p>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
