import React from 'react'

function OpenAccount() {
  return (
    <>
      <div className="get-form">

      <div className="get-inpbox get-date-inp">
        <div className="get-inp-left">
          <input type="text" placeholder='First Name'/>
        </div>
        <div className="get-inp-right">
          <input type="text" placeholder='Last Name'/>
        </div>
      </div>

      <div className="get-inpbox get-date-inp">
        <div className="get-inp-left">
          <input type="text" placeholder='Email'/>
        </div>
        <div className="get-inp-right">
          <input type="text" placeholder='Phone Number'/>
        </div>
      </div>  
      <div className="get-inpbox get-date-inp">
        <div className="get-inp-left">
          <input type="text" placeholder='Company Name'/>
        </div>
        <div className="get-inp-right">
          <input type="text" placeholder='ABN'/>
        </div>
      </div>  

      <div className="get-inpbox">
        <select name="" id="course">
          <option value="Average Shipments Per Week">Average Shipments Per Week</option>
          <option value="Every So Often">Every So Often</option>
          <option value="Up to 5">Up to 5</option>
          <option value="6 - 20">6 - 20</option>
          <option value="20+">20+</option>
        </select>
      </div>
      <div className="get-inpbox">
        <select name="" id="course">
          <option value="Account Type">Account Type</option>
          <option value="Pay As You Go">Pay As You Go</option>
          <option value="Credit">Credit</option>
        </select>
      </div>
      {/* <div className="get-inpbox">
        <input type="text" placeholder="Enter Weight (kgs) & Dimensions (metric)" />
      </div> */}
      
      
      <div className="get-inpbox">
        <button>Open Account</button>
      </div>
    </div>
    </>
  )
}

export default OpenAccount
