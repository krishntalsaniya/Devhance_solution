// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// // import required modules
// import { Pagination } from 'swiper/modules';

// export default function AboutSlider() {
//   return (
//     <>
//       <Swiper
//         slidesPerView={'auto'}
//         spaceBetween={30}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//             <img src="/images/services-1.jpg" alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//              <img src="/images/services-2.jpg" alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//              <img src="/images/services-3.jpg" alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//              <img src="/images/services-4.jpg" alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//              <img src="/images/services-5.jpg" alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//              <img src="/images/services-6.jpg" alt="" />
//         </SwiperSlide>
//         {/* <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide> */}
//       </Swiper>
//     </>
//   );
// }


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import './styles.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function AboutSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="/images/services-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/services-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/services-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/services-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/services-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/services-6.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/services-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/services-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/services-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/services-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/services-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/services-6.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
