import React from "react";
import { images } from "../../data/data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import "./banner.scss";

const Banner = () => {
  return (
    <div>
      <>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={images.banner.banner1} alt="banner" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images.banner.banner2} alt="banner" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images.banner.banner3} alt="banner" />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Banner;
