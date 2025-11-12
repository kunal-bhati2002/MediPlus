// @ts-ignore: Swiper CSS module has no type declarations in this project
import "swiper/css";
// @ts-ignore: Swiper CSS module has no type declarations in this project
import "swiper/css/pagination";
// @ts-ignore: Swiper CSS module has no type declarations in this project
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const images = [
  "/images/Doctor_holding_patitent_hand.avif",
  "/images/home_banner_image_1.jpg",
  "/images/video-bg.jpg",
  "/images/MRI_scan_photo.webp",
];

export default function Carousel() {
  return (
    <section className="w-full bg-white py-16">
      {/* Swiper Section */}
      <div className="relative max-w-6xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="mySwiper"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-64 rounded-xl overflow-hidden group">
                <img
                  src={src}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-blue-500 hover:text-white transition">
          ❮
        </button>
        <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-blue-500 hover:text-white transition">
          ❯
        </button>
      </div>
    </section>
  );
}

// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";


// const images = [
//     "/images/Doctor_holding_patitent_hand.avif",
//     "/images/home_banner_image_1.jpg",
//     "/images/video-bg.jpg",
//     "/images/MRI_scan_photo.webp",
// ];

// export default function Carousel() {
//     // full max-w-5xl
//     return (
//         <section className="w-full mx-auto py-10">
//             <Swiper
//                 modules={[Autoplay, Pagination, Navigation]}
//                 spaceBetween={20}
//                 slidesPerView={4}
//                 loop={true}
//                 autoplay={{
//                     delay: 2500,
//                     disableOnInteraction: false,
//                 }}
//                 navigation={{
//                     nextEl: ".swiper-button-next-custom",
//                     prevEl: ".swiper-button-prev-custom",
//                 }}
//                 breakpoints={{
//                     320: { slidesPerView: 1 },
//                     640: { slidesPerView: 2 },
//                     1024: { slidesPerView: 3 },
//                     1280: { slidesPerView: 4 },
//                 }}
//                 className="mySwiper"
//             >
//                 {/* <Swiper
//                 modules={[Autoplay, Pagination, Navigation]}
//                 spaceBetween={20}
//                 slidesPerView={4}
//                 centeredSlides={true}
//                 autoplay={{
//                     delay: 2500,
//                     disableOnInteraction: false, // keeps autoplay running even after user touch
//                 }}
//                 pagination={{
//                     clickable: true,
//                 }}
//                 navigation={true}
//                 loop={true}
//                 breakpoints={{
//                     320: { slidesPerView: 1 },
//                     640: { slidesPerView: 2 },
//                     1024: { slidesPerView: 3 },
//                     1280: { slidesPerView: 4 },
//                 }}
//                 className="mySwiper"
//             > */}
//                 {images.map((src, index) => (
//                     <SwiperSlide key={index}>
//                         <div className="relative h-64 rounded-xl overflow-hidden">
//                             <img
//                                 src={src}
//                                 alt={`Slide ${index}`}
//                                 className="w-full h-full object-cover"
//                             />
//                             {/* Optional overlay content */}
//                             <div className=" bg-black/30 flex items-center justify-center text-white text-2xl font-bold">
//                                 Slide {index + 1}
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>

//             {/* Custom Navigation Buttons */}
//             <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-blue-500 hover:text-white transition">
//                 ❮
//             </button>
//             <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-blue-500 hover:text-white transition">
//                 ❯
//             </button>
//         </section >
//     );
// }
// import { useEffect, useState } from "react";

// const images = [
//     "/images/Doctor_holding_patitent_hand.avif",
//     "/images/home_banner_image_1.jpg",
//     "/images/video-bg.jpg",
//     "/images/video-MRI_scan_photo.webp",
// ];

// function Carousel() {
//     const [current, setCurrent] = useState(0);
//     const length = images.length;

//     const nextSlide = () => {
//         setCurrent(current === length - 1 ? 0 : current + 1);
//     };

//     const prevSlide = () => {
//         setCurrent(current === 0 ? length - 1 : current - 1);
//     };

//     useEffect(() => {
//         const interval = setInterval(() => {
//             nextSlide();
//         }, 3000); // every 3 seconds
//         return () => clearInterval(interval);
//     }, [current]);


//     return (
//         <section className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-lg">
//             {/* Slides */}
//             <div className="flex transition-transform duration-700 ease-in-out"
//                 style={{ transform: `translateX(-${current * 100}%)` }}>
//                 {images.map((src, index) => (
//                     <img
//                         key={index}
//                         src={src}
//                         alt={`slide ${index}`}
//                         className="w-full flex-shrink-0 object-cover h-64 md:h-96"
//                     />
//                 ))}
//             </div>

//             {/* Prev Button */}
//             <button
//                 onClick={prevSlide}
//                 className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white/60 hover:bg-white text-gray-800 p-2 rounded-full shadow"
//             >
//                 ❮
//             </button>

//             {/* Next Button */}
//             <button
//                 onClick={nextSlide}
//                 className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white/60 hover:bg-white text-gray-800 p-2 rounded-full shadow"
//             >
//                 ❯
//             </button>

//             {/* Dots Indicator */}
//             <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
//                 {images.map((_, index) => (
//                     <button
//                         key={index}
//                         onClick={() => setCurrent(index)}
//                         className={`w-3 h-3 rounded-full ${index === current ? "bg-white" : "bg-gray-400"
//                             }`}
//                     ></button>
//                 ))}
//             </div>
//         </section>
//     );
// }

// export default Carousel;