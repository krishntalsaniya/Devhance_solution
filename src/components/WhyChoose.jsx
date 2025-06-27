import React from 'react'

function WhyChoose(props) {
  return (
    <>
      <div className="whychoose">
            <div className="container">
                <div className="why-info">
                    <h2>{props.whytitle}</h2>
                    <p>{props.whysubtitle}</p>
                </div>

                <div className="why-data">
                      <div className="why-top">
                            <div className="whycard">
                                <img src={props.whycardimg1} alt="" />
                                <p>{props.whyimgpara1}</p>
                                <div className="why-para">
                                    <p>{props.whycardpara1}</p>
                                </div>
                            </div>
                            <div className="whycard">
                                <img src={props.whycardimg2} alt="" />
                                <p>{props.whyimgpara2}</p>
                                <div className="why-para">
                                    <p>{props.whycardpara2}</p>
                                </div>
                            </div>
                      </div>  
                      <div className="why-bottom">
                            <div className="whycard">
                                <img src={props.whycardimg3} alt="not-find" />
                                <p>{props.whyimgpara3}</p>
                                <div className="why-para">
                                    <p>{props.whycardpara3}</p>
                                </div>
                            </div>
                            <div className="whycard">
                                <img src={props.whycardimg4} alt="not-find" />
                                <p>{props.whyimgpara4}</p>
                                <div className="why-para">
                                    <p>{props.whycardpara4}</p>
                                </div>
                            </div>
                            <div className="whycard">
                                <img src={props.whycardimg5} alt="not-find" />
                                <p>{props.whyimgpara5}</p>
                                <div className="why-para">
                                    <p>{props.whycardpara5}</p>
                                </div>
                            </div>
                      </div>  
                </div>
            </div>
      </div>
    </>
  )
}

export default WhyChoose
