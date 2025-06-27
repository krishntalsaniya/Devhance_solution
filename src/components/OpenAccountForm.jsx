import React from "react";

const OpenAccountForm = () => {
  return (
    <div className="form-container">
      <form className="quote-form">
        <input type="text" placeholder="Enter Your Full Name" />
        <input type="email" placeholder="Enter Your Email" />
        <input type="tel" placeholder="Enter Your Phone Number" />
        <input type="text" placeholder="Company Name (if any)" />
        <button type="submit" className="next-btn">Submit</button>
      </form>
    </div>
  );
};

export default OpenAccountForm;
