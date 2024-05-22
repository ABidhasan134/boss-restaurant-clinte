import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import slider1 from "../../../../assets/home/slide1.jpg";
import slider2 from "../../../../assets/home/slide2.jpg";
import slider3 from "../../../../assets/home/slide3.jpg";
import slider4 from "../../../../assets/home/slide4.jpg";
import slider5 from "../../../../assets/home/slide5.jpg";
import TitelandSub from "../../../../shared/titelandSub";

const Catagory = () => {
  return (
    <section>
      <TitelandSub
        heading="------From 11.00 am to 10.pm-------"
        subtitel="Online Order"
      ></TitelandSub>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-6"
      >
        <SwiperSlide>
          <img src={slider1} alt="" />{" "}
          <h3 className="text-3xl text-white text-center relative -top-12">
            salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
          <h3 className="text-3xl text-white text-center relative -top-12">
            pizzaas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
          <h3 className="text-3xl text-white text-center relative -top-12">
            Shoup
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
          <h3 className="text-3xl text-white text-center relative -top-12">
            desart
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
          <h3 className="text-3xl text-white text-center relative -top-12">
            salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Catagory;
