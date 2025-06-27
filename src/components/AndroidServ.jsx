import React from 'react'


function AndroidServ(props) {
  return (
    <>
            <div className="andData">
                <img src={props.icon} alt="" />
                <h3>{props.title}</h3>
                <p>{props.para}</p>
            </div>
    </>
  )
}

export default AndroidServ
