import React from 'react'

function ForDev(props) {
  return (
    <>
    <div className="container">
      <div className="fordev">
        <div className="for-dev-left">
            <img src={props.devbanner} alt="" />
        </div>
        <div className="for-dev-right">
            <h2>{props.devtitle}</h2>
            <strong>{props.devstrong}</strong>
            <p>{props.devpara1}</p>
            <p>{props.devpara2}</p>
        </div>
      </div>
    </div>      
    </>
  )
}

export default ForDev
