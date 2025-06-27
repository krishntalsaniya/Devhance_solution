import React from 'react'
import AndroidServ from './AndroidServ'

function ServOur(props) {
  return (
    <>

    <div className="servour">
        {/* <div className="container"> */}
            <div className="serv-top">
                <div className="serv-tp-left">
                    <h2>{props.leftTitle}</h2>
                </div>
                <div className="serv-tp-right">
                    <p>{props.rightpara}</p>
                </div>
            </div>
            {/* <div className="serv-bottom">
                <AndroidServ icon="/images/offer1.png" title="Custom Android App Development" para="TechGropse offers custom android app development services in Saudi Arabia so you may voice your brand in just the way you want. Our team of experts promises to deliver android apps that are high-performing and scalable."/>
                <AndroidServ icon="/images/design.png" title="Android UI/UX Design" para="The world is running its fingers all over Android. At a time where Android devices have made a home in every house, it is vital to expand your business on android’s digital spectrum. Our development team is highly skilled in fashioning user-friendly yet high geared android apps."/>
                <AndroidServ icon="/images/Web.png" title="Android Web-Based Apps" para="Your business deserves to be seen everywhere. Our highly competent app developers have unmatchable skills in developing custom Android web-based app development. These solutions will help you in making your app more accessible to your users."/>
                <AndroidServ icon="/images/multi.png" title="Multi-Platform Deployment" para="Carrying the beam of a top android app development company we specialize in deploying apps with seamless integration. Your needs to establish your reign over any platform will be taken care of by our expert android app development team. Get ahead of every competition while partnering with us."/>
            </div> */}
        {/* </div> */}
    </div>
      
    </>
  )
}

export default ServOur
