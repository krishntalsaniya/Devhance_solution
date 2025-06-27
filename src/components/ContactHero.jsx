import React, { useState } from 'react';

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const courses = [
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Development',
    'Graphic Design',
    'UI & UX',
    'video Editing',
    'Hardware Networking',
    'Cyber Security',
    'Web desiging',
    'Wordpress',
    'SEO',
    'Digital Marketing',
    'Tally',
    'Excel',
    'AutoCAD',
    'Solidedge',
    'Creo',
    'Solidworks',
    'Siemens NX',
    'Ansys',
    'Revit Bim',
    'Revit Structure',
    'Sketchup',
    'Primavera',
    '3Ds Max',
    'Staad Pro',
  ];

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "70da9e13-dfe4-4f4a-9980-796c7e9bb957");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setIsSubmitted(true);
      event.target.reset(); // clear the form
    } else {
      alert("Failed to submit form. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 rounded-lg contact-fm">
      <h1 className='contact-txt'>Contact Us</h1>

      {isSubmitted ? (
        <div className="text-green-600 text-center font-semibold text-lg mb-6">
         <img src="/images/success.gif" width="100%"/> <p className='thank-you'> Thank you! We’ll contact you soon. </p>
        </div>
      ) : (
        <form onSubmit={onSubmit}>
          <div className="mb-4 demo-form">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div className="mb-4 demo-form">
            <label htmlFor="Email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="text"
              id="Email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div className="mb-4 demo-form">
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
              Contact Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div className="mb-4 demo-form">
            <label htmlFor="discription" className="block text-gray-700 font-medium mb-2">
              Whats your Project all about
            </label>
            <textarea name="discription" id="discription" ></textarea>
          </div>

          {/* <div className="mb-6 demo-form">
            <label htmlFor="course" className="block text-gray-700 font-medium mb-2">
              Select course
            </label>
            <select
              id="course"
              name="course"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            >
              <option value="">-- Select a course --</option>
              {courses.map((course) => (
                <option key={course} value={course}>{course}</option>
              ))}
            </select>
          </div> */}
  <br />
  <br />
          {/* <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 px-4 rounded-md hover:bg-red-700 transition-colors font-medium btn-donate"
          >
            CONTACT NOW
          </button> */}

        <button type="submit"
            className="w-full bg-red-600 text-white py-3 px-4 rounded-md hover:bg-red-700 transition-colors font-medium btn-donate">
          <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
              fill="currentColor"
            ></path>
          </svg>
          <span>CONTACT NOW</span>
        </button>

        </form>
      )}

      {/* <div className="reach-us mt-8">
        <h3 className="text-xl font-semibold">Reach Us At</h3>
        <p className="text-gray-700 mt-2">
          <strong>Elite Training Institute</strong><br />
          Opp. Baroda City Mall,<br />
          Nr.Ghee Gud Restaurant,<br />
          Tulshidham Char Rasta,<br />
          Manjalpur, Vadodara
        </p>
      </div> */}
    </div>
  );
};

export default ContactForm;
