import React from 'react'
import Button from './Button';

function ServHero(props) {
     const divStyle = {
    // width:"100%",    
    // height:"100vh",
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${props.bgurl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment:'fixed'
  };

  return (
    <>
      <div className="servhero" style={divStyle}>
       <div className="servdata">
            <h1>{props.title}</h1> 
            <h3>{props.subtitle}</h3>
            <p>{props.para}</p>
            <div className="btn">
                <center>
                    <Button title="Know More"/>
                </center>
            </div>
       </div>
      </div>
    </>
  )
}

export default ServHero
