"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const HomeBackgrounds = () => {
  const backgroundSources = [
    { type: "video", src: "/videos/bg-video1.mp4" },
    { type: "image", src: "/images/bg-image1.png" },
    { type: "video", src: "/videos/bg-video2.mp4" },
    { type: "image", src: "/images/bg-image2.png" },
  ];

  return (
    <div className="relative overflow-hidden min-h-screen">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        className="h-full w-full"
        style={{ height: "100vh" }}
      >
        {backgroundSources.map((bg, index) => (
          <SwiperSlide key={index}>
            {bg.type === "video" ? (
              <video
                src={bg.src}
                autoPlay
                muted
                loop
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <Image
                src={bg.src}
                alt={`Background ${index + 1}`}
                layout="fill"
                objectFit="cover"
                priority
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Main content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
        <p className="mt-4 text-lg">
          Here is some main content on top of the video or image background.
        </p>
      </div>
    </div>
  );
};

export default HomeBackgrounds;
