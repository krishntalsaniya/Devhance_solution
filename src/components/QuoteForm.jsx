import React from "react";

const QuoteForm = () => {
  return (
    <div className="form-container">
      <form className="quote-form">
        <select><option>Select Service</option></select>
        <select><option>Select Freight Category</option></select>
        <input type="text" placeholder="Enter Weight (kgs) & Dimensions (metric)" />
        <div className="date-row">
          <input type="date" />
          <input type="date" />
        </div>
        <p className="upload-label">Upload Image of Item to be Picked Up</p>
        <div className="upload-box">
          <input type="file" />
          <span>Upload File ➕</span>
        </div>
        <p className="file-note">Upload supported file (Max 15MB)</p>
        <button type="submit" className="next-btn">Next</button>
      </form>
    </div>
  );
};

export default QuoteForm;
