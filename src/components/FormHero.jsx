import React from 'react'
import Button from './Button'

function FormHero(props) {
  return (
    <>
      <div className="frmhero">
        <div className="container">
            <div className="formhero">
                <div className="frm-left">
                    <h1>{props.title}</h1>
                    <p>{props.subtitle}</p>
                    <p>{props.para}</p>
                    <br />
                    <br />
                    <div className="btn">
                        <Button title="Know More"/>                
                    </div>
                </div>
                <div className="frm-right">
                    <form class="form">
                        <p class="title">Share Your Idea </p>
                            <label>
                                <input required="" placeholder="Full Name" type="text" className="input" />
                                {/* <span>Full Name</span> */}
                            </label>

                            <label>
                                <input required="" placeholder="Email" type="text" className="input" />
                                {/* <span>Email</span> */}
                            </label>        
                        <label>
                            <input required="" placeholder="Phone Number" type="email" className="input" />
                            {/* <span>Phone Number</span> */}
                        </label> 
                            
                        <label>
                            {/* <input required="" placeholder="" type="password" class="input" /> */}
                            <textarea name="" className='input' placeholder='message' id=""></textarea>
                            {/* <span>Message</span> */}
                        </label>
                        {/* <label>
                            <input required="" placeholder="" type="password" class="input" />
                            <span>Confirm password</span>
                        </label> */}
                        <button class="submit">Submit</button>
                        {/* <p class="signin">Already have an acount ? <a href="#">Signin</a> </p> */}
                    </form>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default FormHero
