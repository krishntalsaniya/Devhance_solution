import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

export default function CustomerSlider() {
  return (
    <>
    <div className="slider">
    
    <h2>OUR CUSTOMERS</h2>
    <p>Hear what our clients have to say about their experience with NFSL. From small businesses to multinational corporations, our customers attest to the exceptional service and reliability that we provide.</p>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>

        <div className='cust'>
            <p> 
            I would recommend Jory to transport your freight. He has a wealth of knowledge in transporting loads across Australia.  I have been dealing with Jory for 7 years or so and in that time, has had major growth.  He is always available to answer any questions you may have.
            </p>
            <p>
                Josh Butler

                Brisbane Transport Coordinator

                Midway Metals
            </p>
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className='cust'>
            <p> 
            I would recommend Jory to transport your freight. He has a wealth of knowledge in transporting loads across Australia.  I have been dealing with Jory for 7 years or so and in that time, has had major growth.  He is always available to answer any questions you may have.
            </p>
            <p>
                Josh Butler

                Brisbane Transport Coordinator

                Midway Metals
            </p>
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className='cust'>
            <p> 
            I would recommend Jory to transport your freight. He has a wealth of knowledge in transporting loads across Australia.  I have been dealing with Jory for 7 years or so and in that time, has had major growth.  He is always available to answer any questions you may have.
            </p>
            <p>
                Josh Butler

                Brisbane Transport Coordinator

                Midway Metals
            </p>
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className='cust'>
            <p> 
            I would recommend Jory to transport your freight. He has a wealth of knowledge in transporting loads across Australia.  I have been dealing with Jory for 7 years or so and in that time, has had major growth.  He is always available to answer any questions you may have.
            </p>
            <p>
                Josh Butler

                Brisbane Transport Coordinator

                Midway Metals
            </p>
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className='cust'>
            <p> 
            I would recommend Jory to transport your freight. He has a wealth of knowledge in transporting loads across Australia.  I have been dealing with Jory for 7 years or so and in that time, has had major growth.  He is always available to answer any questions you may have.
            </p>
            <p>
                Josh Butler

                Brisbane Transport Coordinator

                Midway Metals
            </p>
        </div>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>

    </div>

    </>
  );
}
