import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import GetQuote from '../components/GetQuote';
import OpenAccount from '../components/OpenAccount';

function Get() {
 const [activeTab, setActiveTab] = useState("quote"); // default is GET QUOTE
  return (
    <>

    <Header/>
        
      <div className="get">
        {/* <img src="/images/quote.jpg" alt="" /> */}
        {/* <div className="get-data">

        </div> */}

        <div className="get-wrapper">
            <div className="get-btns">
              <button onClick={() => setActiveTab("quote")}>GET QUOTE</button>
              <button  onClick={() => setActiveTab("account")}>OPEN ACCOUNT</button>
            </div>

            <div>
              

            {activeTab === "quote" ? (
              <div>
                {/* === GET QUOTE Component === */}
                <GetQuote/>
                {/* Add rest of GET QUOTE fields here... */}
                </div>
                ) : (
                  <OpenAccount/>
                )}

            </div>
            
        </div>

       

      </div>

      

    <Footer/>  
    </>
  )
}

export default Get
