// import React from 'react'

// function GetQuote() {

//     const onSubmit = async (event) => {
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
//     <>
//       <form className="get-form" onSubmit={onSubmit}>
//       <div className="get-inpbox">
//         <select name="" id="course">
//           <option value="Select Service">Select Service</option>
//           <option value="same Day">same Day</option>
//           <option value="Overnight Express">Overnight Express</option>
//           <option value="Intrastate">Intrastate</option>
//           <option value="Interstate">Interstate</option>
//         </select>
//       </div>
//       <div className="get-inpbox">
//         <select name="" id="course">
//           <option value="Crate">Select Freight Catagory</option>
//           <option value="Crate">Crate</option>
//           <option value="Machinery">Machinery</option>
//           <option value="Tailgate Delivery (Local only)">Tailgate Delivery (Local only)</option>
//           <option value="Pallet">Pallet</option>
//           <option value="Drop Deck Ramp Trailer">Drop Deck Ramp Trailer</option>
//           <option value="Semi Trailer">Semi Trailer</option>
//         </select>
//       </div>
//       <div className="get-inpbox">
//         <input type="text" placeholder="Enter Weight (kgs) & Dimensions (metric)" />
//       </div>
//       <div className="get-inpbox get-date-inp">
//         <div className="get-inp-left">
//           <input type="date" className="custom-date" />
//         </div>
//         <div className="get-inp-right">
//           <input type="date" className="custom-date" />
//         </div>
//       </div>
//       <div className="get-inpbox">
//         <div className="messageBox">
//           <div className="fileUploadWrapper">
//             <label htmlFor="file">
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 337 337">
//                 <circle strokeWidth="20" stroke="#fff" fill="none" r="158.5" cy="168.5" cx="168.5" />
//                 <path strokeLinecap="round" strokeWidth="25" stroke="#fff" d="M167.759 79V259" />
//                 <path strokeLinecap="round" strokeWidth="25" stroke="#fff" d="M79 167.138H259" />
//               </svg>
//               <span className="tooltip">Add a Document</span>
//             </label>
//             <input type="file" id="file" name="file" />
//           </div>
//           <button id="sendButton">Upload files</button>
//         </div>
//       </div>
//       <div className="get-inpbox">
//         <button>Next</button>
//       </div>
//       </form>
//     </>
//   )
// }

// export default GetQuote


import React from 'react';

function GetQuote() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "70da9e13-dfe4-4f4a-9980-796c7e9bb957");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert("Form submitted successfully!");
    } else {
      console.log("Failed", res);
      alert("Form submission failed!");
    }
  };

  return (
    <>
      <form className="get-form" onSubmit={onSubmit} encType="multipart/form-data">
        <div className="get-inpbox">
          <select name="service" id="service">
            <option value="">Select Service</option>
            <option value="same Day">same Day</option>
            <option value="Overnight Express">Overnight Express</option>
            <option value="Intrastate">Intrastate</option>
            <option value="Interstate">Interstate</option>
          </select>
        </div>

        <div className="get-inpbox">
          <select name="freightCategory" id="freightCategory">
            <option value="">Select Freight Category</option>
            <option value="Crate">Crate</option>
            <option value="Machinery">Machinery</option>
            <option value="Tailgate Delivery (Local only)">Tailgate Delivery (Local only)</option>
            <option value="Pallet">Pallet</option>
            <option value="Drop Deck Ramp Trailer">Drop Deck Ramp Trailer</option>
            <option value="Semi Trailer">Semi Trailer</option>
          </select>
        </div>

        <div className="get-inpbox">
          <input
            type="text"
            name="weightDimensions"
            placeholder="Enter Weight (kgs) & Dimensions (metric)"
            required
          />
        </div>

        <div className="get-inpbox get-date-inp">
          <div className="get-inp-left">
            <input type="date" name="pickupDate" className="custom-date" />
          </div>
          <div className="get-inp-right">
            <input type="date" name="deliveryDate" className="custom-date" />
          </div>
        </div>

        <div className="get-inpbox">
          <div className="messageBox">
            <div className="fileUploadWrapper">
              <label htmlFor="file">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 337 337">
                  <circle strokeWidth="20" stroke="#fff" fill="none" r="158.5" cy="168.5" cx="168.5" />
                  <path strokeLinecap="round" strokeWidth="25" stroke="#fff" d="M167.759 79V259" />
                  <path strokeLinecap="round" strokeWidth="25" stroke="#fff" d="M79 167.138H259" />
                </svg>
                <span className="tooltip">Add a Document</span>
              </label>
              <input type="file" id="file" name="file" />
            </div>
            <button type="button" id="sendButton">Upload files</button>
          </div>
        </div>

        <div className="get-inpbox">
          <button type="submit">Next</button>
        </div>
      </form>
    </>
  );
}

export default GetQuote;
