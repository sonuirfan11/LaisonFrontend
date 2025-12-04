import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageGallery({ images }) {
  const progressBar = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressBar.current) {
      progressBar.current.style.transform = `scaleX(${1 - progress})`;
    }
  };

  return (
    <div className="relative w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper w-full"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className="w-full h-90 rounded-xl flex items-center justify-center">
              <img
                src={img}
                alt={`Slide ${idx}`}
                className="w-full h-full object-cover "
              />
            </div>
          </SwiperSlide>
        ))}

        {/* White Progress Bar */}
        <div className="absolute bottom-7 left-0 w-full h-2 rounded-xl bg-gray-700 z-40 m-auto">
          <div
            ref={progressBar}
            className="h-2 bg-white origin-left rounded-xl transition-transform duration-100 linear"
          ></div>
        </div>
      </Swiper>
       {/* Navigation buttons (kept inside container) */}
        <button className="hidden md:flex custom-prev absolute top-1/2 -left-4 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button className="hidden md:flex custom-next absolute top-1/2 -right-4 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100">
          <ChevronRight className="w-5 h-5" />
        </button>
    </div>
  );
}
