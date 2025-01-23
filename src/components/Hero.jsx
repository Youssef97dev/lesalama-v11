"use client";
import Link from "next/link";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const items = [
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/yakitd32v7jwvcvm45s2",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/sssss_kpsscz",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/lbhwn2jkfj2egatvhlku",
];

const Hero = ({ reserveText }) => {
  return (
    <div className="h-screen lg:h-[97vh] w-full bg-color_3 px-0 lg:px-20">
      <div className="w-full h-full relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          speed={1400}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next-ex1",
            prevEl: ".swiper-button-prev-ex1",
          }}
          className="swiper w-full h-full"
          id="slider1"
        >
          <div className="swiper-wrapper">
            {items.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <img
                    src={`${item}`}
                    className="w-full h-full object-cover"
                    alt="itemImage"
                  />
                </SwiperSlide>
              );
            })}
          </div>
          <button className="swiper-button-prev-ex1 grid place-content-center left-2 lg:left-8 p-1 transition text-secondary hover:text-white absolute z-[999] top-[50%] -translate-y-1/2">
            <MdKeyboardArrowLeft size={45} />
          </button>
          <button className="swiper-button-next-ex1 grid place-content-center right-2 lg:right-8 p-1 transition text-secondary hover:text-white absolute z-[999] top-[50%] -translate-y-1/2">
            <MdKeyboardArrowRight size={45} />
          </button>
        </Swiper>
        <div className="absolute bottom-[47%] lg:-bottom-11 right-1/2 left-1/2 flex justify-center items-center z-10">
          <Link
            href="https://www.sevenrooms.com/explore/lessalamamarrakech/reservations/create/search/"
            target="_blank"
            className="text-white bg-color_1 px-4 py-2 lg:py-7 lg:px-8"
          >
            {reserveText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
