// import React from 'react';

// const ApplicationForm = () => {

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);

//     formData.append("access_key", "70da9e13-dfe4-4f4a-9980-796c7e9bb957");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       },
//       body: json
//     }).then((res) => res.json());

//     if (res.success) {
//       console.log("Success", res);
//     }
//   };


//   return (
//     <form className="application-form" >
//     <h2>Come Work With Us</h2>
//       <div className="form-row">
//         <div className="form-group">
//           <label>First name</label>
//           <input type="text" />
//         </div>
//         <div className="form-group">
//           <label>Last name</label>
//           <input type="text" />
//         </div>
//       </div>

//       <div className="form-row">
//         <div className="form-group">
//           <label>Email *</label>
//           <input type="email" required />
//         </div>
//         <div className="form-group">
//           <label>Phone</label>
//           <input type="text" />
//         </div>
//       </div>

//       <div className="form-row">
//         <div className="form-group">
//           <label>Type of Contract</label>
//           <select>
//             <option>Select</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label>Type of Contract</label>
//           <select>
//             <option>Select</option>
//           </select>
//         </div>
//       </div>

//       <div className="form-row">
//         <div className="form-group">
//           <label>I have (select all that apply) *</label>
//           <select>
//             <option>Option 1</option>
//             <option>Option 2</option>
//           </select>
//         </div>
//         <div className="form-group resume-upload">
//           <small>Upload supported file (Max 15MB)</small>
//           <label className="upload-button">
//             Upload Resume <span className="plus-icon">+</span>
//             <input type="file" accept=".pdf,.doc,.docx" />
//           </label>
//         </div>
//       </div>

//       <button type="submit" className="submit-button">Apply</button>
//     </form>
//   );
// };

// export default ApplicationForm;


import React from 'react';

const ApplicationForm = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "88398c24-16f3-440d-a3e3-574bb0f8ed2c");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then(res => res.json());

    if (res.success) {
      alert("Success! Your form has been submitted.");
      event.target.reset();
    } else {
      alert("Error! Please try again.");
    }
  };

  return (
    <form className="application-form" onSubmit={onSubmit} encType="multipart/form-data">
      
        <input type="hidden" name="access_key" value="88398c24-16f3-440d-a3e3-574bb0f8ed2c" />
      
      <h2>Come Work With Us</h2>

      <div className="form-row">
        <div className="form-group">
          <label>First name</label>
          <input type="text" name="first_name" required />
        </div>
        <div className="form-group">
          <label>Last name</label>
          <input type="text" name="last_name" required />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Email *</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="text" name="phone" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Type of Contract</label>
          <select name="contract_type_1">
            <option>Select</option>
            <option>Full-Time</option>
            <option>Part-Time</option>
          </select>
        </div>
        <div className="form-group">
          <label>Type of Contract</label>
          <select name="contract_type_2">
            <option>Select</option>
            <option>Freelance</option>
            <option>Internship</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>I have (select all that apply) *</label>
          <select name="skills">
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
        <div className="form-group resume-upload">
          <small>Upload supported file (Max 15MB)</small>
          <label className="upload-button">
            Upload Resume <span className="plus-icon">+</span>
            <input type="file" name="resume" accept=".pdf,.doc,.docx" required />
          </label>
        </div>
      </div>

      <button type="submit" className="submit-button">Apply</button>
    </form>
  );
};

export default ApplicationForm;
